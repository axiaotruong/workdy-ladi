# 02 — Brand Kit

**Định hướng: bám thẳng style của app (light mode).** Canvas **trắng / đen / xám là chủ đạo**;
màu chỉ dùng **có chức năng** (trạng thái, phân loại) để đỡ nhàm — không có một tông brand phủ
khắp. Mục tiêu: landing và app trông **cùng một nhà**.

Mọi giá trị dưới đây trích thẳng từ `frontend/globals.css` (`:root` = light mode).

## Triết lý màu (giống app)

> **Trắng–đen–xám lo phần khung. Màu chỉ xuất hiện khi có nghĩa** (trạng thái / phân loại).

Điểm quan trọng: app **cố tình để nút chính & accent màu trung tính đen** (`--accent: #111827`),
không dùng brand-hue. Màu (xanh/vàng/đỏ/blue) chỉ bật ở: chấm trạng thái, tag phân loại, icon
tài liệu. Cách này vừa sạch, vừa khác biệt với đám AI landing "gradient tím phủ khắp".
→ Landing giữ đúng vậy: **nền trắng, chữ gần đen, nút chính đen**, màu rải rất tiết chế.

## Palette nền + chữ (light — chủ đạo)

```
/* Nền */
--bg-base:    #ffffff   /* nền chính */
--bg-subtle:  #f9fafb   /* section xen kẽ / card nhạt */
--bg-muted:   #f3f4f6   /* chip, icon bg, vùng nhấn nhẹ */
--bg-page:    #eff2f6   /* nền ngoài cùng nếu cần tách khối */

/* Chữ */
--text-primary:   #111827   /* gần đen — heading, body */
--text-secondary: #6b7280   /* phụ, mô tả */
--text-tertiary:  #9ca3af   /* caption */

/* Viền / phân cách */
--border:        #e5e7eb
--border-subtle: #f0f0f0
```

## Hành động & tương tác (neutral, như app)

```
/* Nút chính = ĐEN (giống app), KHÔNG phải màu brand */
--btn-primary-bg:    #111827
--btn-primary-hover: #374151
--btn-primary-text:  #ffffff

/* Nút phụ */
--btn-secondary-bg:     #ffffff
--btn-secondary-border: #e5e7eb
--btn-secondary-text:   #374151

/* Link / interactive (chỗ duy nhất có màu "brand" nhẹ) */
--link:       #4F46E5   /* indigo — đúng token app */
--link-hover: #4338ca
--focus-ring: 0 0 0 2px rgba(0,0,0,.06)
```

## Màu chức năng — "chỗ cho đỡ nhàm" (dùng tiết chế, đúng như app)

Đây là nơi lấy màu vào, y hệt cách app đang dùng: **chấm trạng thái, tag phân loại, icon**.
KHÔNG tô nền section hay tiêu đề bằng mấy màu này.

```
/* Chấm trạng thái (roster đội, run status) */
--dot-ready:      #22c55e   /* xanh lá — live/xong */
--dot-processing: #eab308   /* vàng — đang chạy */
--dot-error:      #ef4444   /* đỏ — lỗi */
--dot-idle:       #9ca3af   /* xám — chờ */

/* Tint trạng thái (badge/banner nhẹ) */
--success: #065f46 on #d1fae5
--warning: #92400e on #fef3c7
--error:   #b91c1c on #fef2f2

/* Màu phân loại (tag category tool/phòng ban — mượn palette icon tài liệu của app) */
--cat-red:    #ef4444   --cat-blue:   #3b82f6
--cat-purple: #8b5cf6   --cat-amber:  #f59e0b
--cat-green:  #22c55e   --cat-pink:   #ec4899
```

**Quy tắc dùng màu chức năng:**
- Roster đội (hero) & run status → chấm màu trạng thái.
- Chip category ở use-case pipelines / tool grid → mỗi nhóm một màu category (nhạt, viền mảnh).
- Badge "Sắp có", "Mới" → tint trạng thái.
- Ngoài mấy chỗ trên: giữ trắng-đen-xám.

## Section nền tối (tuỳ chọn — mượn dark mode app)

Nếu muốn 1–2 section tạo tương phản (hero hoặc final CTA), dùng **navy của dark mode app**
(không phải near-black lạ), để vẫn "cùng nhà":

```
--dark-page:  #0f0f1e
--dark-card:  #1a1a2e
--dark-elev:  #1e1e36
text trên nền tối: #e5e7eb / #9ca3af
```

Mặc định: **để light toàn trang** cho đúng "trắng đen chủ đạo". Chỉ bật navy nếu thấy cần điểm nhấn.

## Card (giống app)

```css
.card{
  background:#ffffff;
  border:1px solid #e5e7eb;
  border-radius:12px;
  box-shadow:0 1px 3px rgba(0,0,0,.08);
}
.card:hover{ border-color:#d1d5db; box-shadow:0 4px 16px rgba(0,0,0,.06); }
```

## Typography

- **Font:** `Inter` (fallback `-apple-system, sans-serif`) — dùng `next/font/google`.
- **KHÔNG bê font-size app** (base 13px — đó là UI dày đặc). Landing dùng scale marketing:

```
Hero headline:  clamp(40px, 6vw, 64px) · weight 700 · line-height 1.05 · letter-spacing -0.03em
Section title:  clamp(26px, 4vw, 38px) · weight 700 · letter-spacing -0.02em
Sub/lead:       18–20px · weight 400 · color text-secondary · line-height 1.5
Body:           16px · line-height 1.7
Small/label:    13px · weight 500
```

- Không cần gradient chữ. Nếu muốn nhấn 1 cụm trong headline: dùng **màu đen đậm hơn nền phụ**
  hoặc gạch chân mảnh, giữ tinh thần neutral. (Chỉ khi thật cần mới điểm 1 màu category.)

## Animations (trích app, tái dùng)

```css
@keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
.animate-in{ animation:fadeIn .4s cubic-bezier(.16,1,.3,1) }
@keyframes card-entrance { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
.card-animate{ opacity:0; animation:card-entrance 350ms cubic-bezier(.21,1.02,.43,1.01) forwards }
/* stagger: animation-delay tăng dần theo index ~60–80ms/step (app đang dùng cho list/grid) */
```

## Radius / spacing

- Radius: card `12px`, nút `8–10px`, pill `9999px`. Ảnh/mockup bo `0.75rem`.

## Logo

- Landing nền sáng → dùng logo bản **tối** (chữ đậm). Section navy (nếu có) dùng bản trắng.
- Wordmark hiện base64 trong `public/og-preview.html`. Nên xin file gốc SVG (cả 2 biến thể).

## Tailwind config (dán vào `tailwind.config.ts`)

```ts
theme: {
  extend: {
    colors: {
      base:'#ffffff', subtle:'#f9fafb', muted:'#f3f4f6', page:'#eff2f6',
      ink:   { DEFAULT:'#111827', soft:'#6b7280', faint:'#9ca3af' },
      line:  { DEFAULT:'#e5e7eb', subtle:'#f0f0f0' },
      link:  { DEFAULT:'#4F46E5', hover:'#4338ca' },
      dot:   { ready:'#22c55e', processing:'#eab308', error:'#ef4444', idle:'#9ca3af' },
      cat:   { red:'#ef4444', blue:'#3b82f6', purple:'#8b5cf6', amber:'#f59e0b', green:'#22c55e', pink:'#ec4899' },
      dark:  { page:'#0f0f1e', card:'#1a1a2e', elev:'#1e1e36' },
    },
    fontFamily: { sans:['var(--font-inter)','system-ui','sans-serif'] },
    keyframes: {
      fadeIn:{ '0%':{opacity:'0',transform:'translateY(10px)'}, '100%':{opacity:'1',transform:'none'} },
    },
    animation: { 'fade-in':'fadeIn .4s cubic-bezier(.16,1,.3,1)' },
  },
}
```

## Tóm tắt 1 dòng

Nền trắng, chữ gần đen, nút chính đen — **đúng app**; màu chỉ dành cho chấm trạng thái, tag
phân loại, badge. Muốn tương phản thì mượn navy dark-mode của app cho 1–2 section.
