# 01 — Project Brief

> ⚠️ **NGÔN NGỮ LANDING: 100% TIẾNG ANH.** Mọi copy hiển thị trên trang (headline, sub,
> CTA, nhãn, nội dung section) đều viết bằng tiếng Anh — không song ngữ, không toggle VI/EN
> ở bản đầu. Các đoạn tiếng Việt trong tài liệu này chỉ là **ghi chú nội bộ / lý do quyết
> định** cho đội dev — KHÔNG đưa lên trang. Copy thật để dùng luôn nằm trong khối code
> hoặc được đánh dấu rõ **"On-page copy (EN)"**.

## Workdy là gì (một câu)

Nền tảng để bạn **thuê một đội nhân viên AI** làm phần việc lặp lại của shop —
research, dựng video, viết listing, chăm khách — **theo quy trình bạn đặt ra**, để bạn
rảnh tay làm việc khác. Không cần code.

## Mental model bán hàng (dùng xuyên suốt landing)

> **Bạn là ông chủ · Agent = nhân viên AI · Workflow = quy trình bạn giao cho họ.**

Đừng trình bày workflow và agent như 2 feature ngang hàng, kỹ thuật. Bán khái niệm
"thuê đội nhân viên AI làm theo quy trình của bạn" — dễ hiểu cho người không kỹ thuật,
đúng xu hướng "AI workforce / digital employees". Điểm cộng: khung "bạn là sếp" **xoá
nỗi sợ mất kiểm soát** — AI làm chân tay, bạn vẫn cầm trịch.

### ⚠️ Ranh giới lời hứa (QUAN TRỌNG — đừng overclaim)

- ✅ Nói: **tiết kiệm thời gian việc lặp lại**, để bạn tập trung việc khác + **scale không thêm người**.
- ❌ ĐỪNG nói: AI "vận hành / quản lý cả shop POD". App **chưa với tới** mức đó — hứa
  thế là mất tin ngay lần dùng thử. Nhân viên AI làm *phần việc lặp lại*, không điều hành business.

## ⭐ Điểm bán lõi (khai thác 2 thứ này)

1. **Hết việc lặp lại** — thiết kế quy trình 1 lần, nhân viên AI lặp lại vô hạn, bạn không đụng tay.
2. **Scale không thêm headcount** — nhân viên người: thuê thêm = tốn lương + thời gian.
   Nhân viên AI: **1 → 10 → 100 chỉ đổi input, cùng một công.** Ví dụ: workflow tạo
   video giờ chạy 1 video/lần, sau nhân lên 100 mà không tốn thêm sức.
   *(Grounded: Loop node lặp qua dataset + trigger theo lịch/Webhook + publish thành API.)*

## Ngách (wedge): POD / E-commerce ops

Đợt đầu landing nói chuyện với **người vận hành shop POD / e-com cỡ nhỏ–vừa**.
Engine vẫn general, nhưng mặt tiền vertical hoá theo POD. Đổi ngách sau = đổi hero +
use-case, không đổi brand.

## Tệp khách chính (đã phân tích)

**Trúng nhất: "operator" POD/e-com nhỏ–vừa** — chủ store, người chạy vận hành,
freelancer/agency làm POD. Đặc điểm:

- Làm nhiều việc lặp lại tốn giờ: research niche, spy đối thủ, dựng video/ảnh ad,
  viết title–description–tag, listing nhiều store, chăm khách.
- **Không code**, nhưng chịu chi nếu tiết kiệm được giờ công.

**KHÔNG nhắm (đợt đầu):**
- Dev/kỹ thuật thuần (đã có n8n/code) — chỉ chừa 1 dòng "mở rộng bằng HTTP/Code/MCP".
- Enterprise thật (chu kỳ bán dài, đòi SSO/SLA/compliance chưa kham nổi). → **Bỏ chữ
  "Enterprise" khỏi hero**, nó hút sai tệp.

## Hero copy — ĐÃ CHỐT (On-page copy — EN, dùng nguyên văn)

Chia vai: **headline bắt tai** (AI employees) · **sub nói thật** (lo việc lặp lại + scale,
KHÔNG nói "run the whole store").

- **Headline:** `Hire AI employees for your POD store`
  - (Cụm "AI employees" cho vào `<span>` để ăn màu nhấn — xem brand-kit, KHÔNG dùng gradient tím.)
- **Sub:** `Research, ad videos, listings — your AI employees handle the repetitive work so you can focus on growth. Run 1 or 100, same effort.`
- **CTA chính:** `Start free` → trỏ `app.workdy.ai` (đăng ký)
- **CTA phụ:** `See a real workflow run →` → scroll tới section use-case

*(Ghi chú nội bộ, không lên trang: bản dịch nghĩa tiếng Việt để đội hiểu ý — "Thuê nhân
viên AI cho shop POD của bạn" / "Research, dựng video, viết listing — nhân viên AI lo
phần việc lặp lại để bạn rảnh tay tập trung tăng trưởng. Làm 1 hay 100, cùng một công.")*

## Định vị so với đối thủ (nội bộ, không lên trang)

Thị trường workflow/agent (Zapier AI, n8n, Make, Gumloop, Lindy, Dify...) đông và
nhiều tiền. Player nhỏ **không thắng bằng positioning generic**. Lợi thế của Workdy để
nhấn: **bộ tool POD/e-com sẵn có** (video ad, product image, market/competitor intel,
TikTok ads, SEO/content) + **copilot cảnh báo lỗi** — thứ các tool horizontal không có
sẵn cho ngách này.

## Tông giọng (voice)

- Trực diện, nói kết quả và thời gian tiết kiệm, không nói jargon kỹ thuật.
- Tự tin, gọn. **Ngôn ngữ trang: tiếng Anh 100%** (target thị trường quốc tế / tệp POD nói
  tiếng Anh). Không cần i18n VI ở bản đầu — nếu sau này cần, thêm route `/vi` riêng.
