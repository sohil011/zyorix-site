import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { brand: {50:'#eef7ff',100:'#d8ebff',200:'#b8d9ff',300:'#8ec2ff',400:'#5aa4ff',500:'#2a83ff',600:'#1d65db',700:'#1a52b4',800:'#1a4591',900:'#1a3a78'},}, boxShadow:{soft:'0 10px 30px rgba(0,0,0,0.08)'} } },
  plugins: [],
}
export default config
