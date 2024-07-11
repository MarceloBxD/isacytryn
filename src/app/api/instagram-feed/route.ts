// import { NextResponse } from "next/server";
// import axios from "axios";
// import { env } from "@/utils/envSchema";

// export async function GET() {
//   try {
//     const url = `https://graph.instagram.com/me/media?access_token=${env.INSTAGRAM_ACCESS_TOKEN}`;
//     const { data } = await axios.get(url);
//     return NextResponse.json(data);
//   } catch (err) {
//     console.error("Erro ao buscar dados do Instagram", err);
//     return NextResponse.error();
//   }
// }
