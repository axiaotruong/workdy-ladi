# Workdy — Landing Page Handoff

Gói này đủ để một repo Next.js **mới** (`workdy.ai`) hiểu dự án là gì, dựng đúng
thương hiệu và bố cục landing, mà không cần truy cập vào repo app (`app.workdy.ai`).

> App engine = general-purpose AI workflow + agent platform.
> Landing đợt đầu = đóng gói theo **ngách POD / e-commerce** (wedge), nhưng brand
> vẫn giữ được để sau đổi ngách chỉ cần đổi hero + vài use-case.

## Đọc theo thứ tự

| File | Nội dung |
|------|----------|
| [`docs/01-project-brief.md`](docs/01-project-brief.md) | Workdy là gì · tệp khách · positioning · hero copy (đã chốt) · thông điệp |
| [`docs/02-brand-kit.md`](docs/02-brand-kit.md) | Màu (trắng-đen chủ đạo, bám style app), typography, hiệu ứng — **token thật** từ app, kèm CSS vars & Tailwind config sẵn dán |
| [`docs/03-landing-spec.md`](docs/03-landing-spec.md) | Bố cục landing từng section + copy + map vào tính năng THẬT của app |
| [`docs/04-nextjs-setup.md`](docs/04-nextjs-setup.md) | Cấu trúc thư mục Next.js đề xuất + danh sách component + checklist SEO |
| [`mockup-reference.html`](mockup-reference.html) | **Bản xem trực quan** (mở bằng trình duyệt) — layout, style, motion; có sẵn CSS/JS (count-up, calculator, canvas demo, FAQ) để lấy lại. ⚠️ Chỉ tham khảo — `03-landing-spec.md` mới là chuẩn về bố cục & copy. |
| [`assets/`](assets/) | Logo + favicon thật lấy từ app. ⚠️ Tên file theo **nền mà logo được thiết kế để đặt lên**, không phải màu bản thân logo — nền sáng (header/footer trắng) dùng `logo-light.png` (logo màu tối) + `favicon.png`; `logo-icon-light.png` cho chỗ hẹp; `logo-dark.png`/`logo-icon-dark.png` (logo màu sáng) dành cho section nền tối. `og-image.png` (1200×630) đã làm lại đúng logo, dùng luôn. |

## Nguồn gốc dữ liệu (để đối chiếu, KHÔNG cần copy sang)

- Design tokens thật: `frontend/globals.css` trong repo app (`:root` = light mode)
- Logo/favicon/OG image thật: `public/` trong repo app — đã copy sẵn vào `assets/` (xem trên)
- Danh sách tính năng: khảo sát toàn bộ `frontend/modules` + `backend/modules`

## Lưu ý quan trọng

1. **Đừng bê component của app sang.** App là React SPA dày đặc UI (font 13px);
   landing là trang marketing tĩnh, font-scale lớn, ưu tiên SEO + tốc độ.
2. **Style bám app (light mode): trắng-đen-xám chủ đạo, nút chính đen**, màu chỉ
   dùng có chức năng (trạng thái, phân loại). KHÔNG gradient tím / glow / glass —
   đó là motif đại trà đã loại. Xem `docs/02-brand-kit.md`.
3. Chỉ tái dùng từ app: **hệ token màu (light)**, **logo**, **animation card-entrance**.
   Còn lại dựng mới cho marketing.
