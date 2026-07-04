# 04 — Next.js Setup

Đề xuất cho repo marketing mới `workdy.ai`. Ưu tiên **SEO + tốc độ + tĩnh**.

## Stack đề xuất

- **Next.js (App Router)** — landing chủ yếu tĩnh, render server (RSC) → SEO tốt.
- **Tailwind CSS** — dán config ở `02-brand-kit.md`.
- **`next/font`** — Inter (biến `--font-inter`).
- **Framer Motion** (tuỳ chọn) — cho stagger/scroll animation; hoặc chỉ CSS keyframes ở brand-kit.
- Deploy: **Vercel** (mặc định hợp Next.js). Domain gốc `workdy.ai`; app ở `app.workdy.ai`.
- Không cần auth, không cần DB. Mọi CTA trỏ sang `app.workdy.ai`.

## Cấu trúc thư mục đề xuất

```
workdy-landing/
├─ app/
│  ├─ layout.tsx          # <html>, Inter font, metadata gốc, OG tags
│  ├─ page.tsx            # ghép các section theo 03-landing-spec.md
│  ├─ globals.css         # @tailwind + brand utilities (.brand-grid/.brand-glow/...)
│  └─ (marketing)/...     # nếu thêm trang phụ: /pricing, /blog sau này
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx
│  │  └─ Footer.tsx
│  ├─ sections/                    # số khối khớp đúng 03-landing-spec.md (1–14)
│  │  ├─ Hero.tsx                  # 1  ⭐ — headline + "your team, running now" roster
│  │  ├─ TrustStrip.tsx            # 2
│  │  ├─ PainPoints.tsx            # 3
│  │  ├─ ScaleWithoutHiring.tsx    # 4  ⭐ — key feature, slider 1→10→100
│  │  ├─ HowItWorks.tsx            # 5  — 3 bước
│  │  ├─ UseCasePipelines.tsx      # 6  ⭐ — 4 pipeline card + mini flow
│  │  ├─ TeamsByRole.tsx           # 7
│  │  ├─ BrandKnowledge.tsx        # 8
│  │  ├─ PublishAndDeploy.tsx      # 9  ⭐ — publish workflow + deploy to chat
│  │  ├─ BuiltForTrust.tsx         # 10 — HITL + Copilot
│  │  ├─ SocialProof.tsx           # 11
│  │  ├─ PricingTeaser.tsx         # 12
│  │  └─ FinalCta.tsx              # 13
│  └─ ui/
│     ├─ AccentText.tsx        # bọc phần headline nhấn (KHÔNG gradient — xem brand-kit)
│     ├─ Card.tsx              # .card — nền trắng, viền hairline (xem brand-kit)
│     ├─ RosterRow.tsx         # dot trạng thái + tên + vai + giá trị (hero, dùng lại ở 9B)
│     ├─ PipelineCard.tsx      # category tag + chip bước → dùng ở §6
│     └─ Button.tsx            # primary (đen, giống app) / secondary (viền)
├─ public/
│  ├─ logo-light.png           # header/footer (nền sáng) — ⚠️ tên ngược trực giác, xem 02-brand-kit.md
│  ├─ favicon.png / logo-icon-light.png / logo-dark.png / ...  # còn lại copy nguyên từ ../assets/
│  ├─ og-image.png             # copy từ ../assets/og-image.png — đã render đúng logo, dùng luôn
│  └─ demos/                   # GIF/video pipeline chạy thật (chụp từ app)
├─ tailwind.config.ts          # dán từ 02-brand-kit.md
└─ next.config.js
```

## Component tái dùng (build 1 lần, xài nhiều section)

- `Card` — nền trắng, viền `#e5e7eb`, bo `12px` (xem `.card` trong brand-kit). Dùng cho
  pipeline card (§6), point-card (§4), feature card (§7, §8, §10).
- `RosterRow` — dot trạng thái + tên nhân viên + vai + giá trị. Dùng ở hero (§1) và
  minh hoạ deploy-to-chat (§9B).
- `AccentText` — nhấn 1 cụm trong headline bằng màu category/highlight nhạt, KHÔNG gradient.
- `Button` — primary nền đen chữ trắng (đúng token `--btn-primary-bg` của app), secondary viền.

## SEO checklist (trong `app/layout.tsx` + `page.tsx`)

- `metadata`: title, description theo brief (`01-project-brief.md`). **`lang="en"`** —
  toàn bộ landing là tiếng Anh, không cần route ngôn ngữ khác ở bản đầu.
- OG/Twitter tags — dùng `og-image.png` từ `../assets/` (đã làm bản light, copy tiếng Anh
  "Hire AI employees for your POD store", không cần làm lại). **Nhớ dùng absolute URL cho
  `og:image`** (commit gần đây của app đã sửa lỗi Facebook crawler không resolve được URL
  tương đối — áp dụng bài học tương tự ở đây).
- `sitemap.xml` + `robots.txt` (Next.js `app/sitemap.ts`, `app/robots.ts`).
- JSON-LD `SoftwareApplication` schema (tăng rich result).
- `next/image` cho mọi ảnh; `priority` cho ảnh hero.

## Nội dung động cần chuẩn bị (chụp từ app)

Vào `app.workdy.ai` (tài khoản test: `hieu@ecomdy.com`) chụp/quay:
1. **Kéo node + nối dây từ canvas trống** — quay màn hình, tốc độ vừa phải, khoảng 4–6
   node. Đây là **video/GIF ưu tiên nhất**, dùng cho khối 5 (How it works) thay animation
   tự dựng — cảnh này bán trực giác "kéo-thả, không cần code" tốt hơn mọi đoạn chữ.
2. Canvas workflow 1 pipeline POD chạy (SSE node status sáng dần) → GIF cho §6.
3. Panel AICopilotInsights → ảnh cho §10.
4. Agent dashboard/analytics → ảnh cho §7.
5. Tool picker (video/image tools) → ảnh cho §7/§6.

Cho tới khi có video #1, dùng animation SVG/CSS loop dựng sẵn (spec chi tiết ở khối 5,
`03-landing-spec.md`) làm placeholder — đừng để khối 5 đứng im hoàn toàn.

## Ngôn ngữ

- **Toàn bộ copy trên trang: tiếng Anh.** Không cần cấu trúc i18n ở bản đầu — viết thẳng
  copy tiếng Anh (đã có sẵn full trong `03-landing-spec.md`) vào component, không qua
  content dictionary. Nếu sau này cần bản tiếng Việt, tách ra `content/en.ts` + `content/vi.ts`
  và thêm route `/vi` lúc đó — không làm trước khi cần.
