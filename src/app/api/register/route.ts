import { NextRequest, NextResponse } from "next/server";

type RegisterPayload = {
  name: string;
  email: string;
  phone?: string;
};

function isValid(p: Partial<RegisterPayload>): p is RegisterPayload {
  if (!p.name || !p.email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email);
}

async function parseBody(req: NextRequest): Promise<Partial<RegisterPayload>> {
  const ct = req.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) {
    return (await req.json()) as Partial<RegisterPayload>;
  }
  const fd = await req.formData();
  return {
    name: String(fd.get("name") ?? ""),
    email: String(fd.get("email") ?? ""),
    phone: String(fd.get("phone") ?? ""),
  };
}

export async function POST(req: NextRequest) {
  const body = await parseBody(req);

  if (!isValid(body)) {
    return NextResponse.json(
      { ok: false, error: "Tên và email hợp lệ là bắt buộc" },
      { status: 400 }
    );
  }

  console.log("[register]", new Date().toISOString(), body);

  const ct = req.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) {
    return NextResponse.json({ ok: true, message: "Đã ghi nhận đăng ký" });
  }

  const url = new URL("/", req.url);
  url.searchParams.set("registered", "1");
  return NextResponse.redirect(url, { status: 303 });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: "/api/register",
    method: "POST",
    fields: ["name", "email", "phone?"],
  });
}
