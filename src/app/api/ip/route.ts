import { IP } from "@/app/(types)/ip";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    console.log(req.query.clientIp);
    const ipInfo = await fetch(`http://ip-api.com/json/${req.query.clientIp}}`)
    const ipInfoJson = await ipInfo.json() as IP
    console.log(ipInfoJson);

    return Response.json(ipInfoJson);
}
