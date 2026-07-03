# 03 — Landing Page Spec (section-by-section)

> ⚠️ **NGÔN NGỮ LANDING: 100% TIẾNG ANH.** Mọi copy trong dấu backtick `` `...` `` dưới đây
> là **on-page copy — dùng nguyên văn tiếng Anh**. Phần chữ tiếng Việt xung quanh chỉ là
> giải thích/lý do cho đội dev, KHÔNG đưa lên trang.

Thứ tự section = thứ tự cuộn trang (narrative: hiểu → tin → muốn → hành động). Mỗi khối ghi:
**việc của khối**, **on-page copy (EN)**, **tính năng THẬT** map vào. Tính năng lấy từ khảo
sát code app; phần đã verify riêng có đánh dấu.

> Nguyên tắc: bán **kết quả**, không bán node. Người xem là POD operator, không phải dev.
> Khung: **you're the boss · agent = AI employee · workflow = the process you hand them.**
> Ranh giới: nói *save time on repetitive work + scale output*, KHÔNG nói *AI runs the whole store*.

## 4 KEY FEATURE (được lên hạng, có khối riêng)

1. **AI employees by role** → Hero + Teams by role
2. **Scale without hiring**
3. **Ready-to-run POD pipelines**
4. **Publish & deploy (tool/API/webhook + Telegram)**

---

## 🔒 THỨ TỰ CUỘN CUỐI CÙNG (LOCKED) — đây là bố cục chính thức

Section body bên dưới có thể đánh nhãn 2b/2c… vì lịch sử chỉnh sửa, nhưng **thứ tự thật khi
dựng trang theo đúng list này** (đã tối ưu narrative: hook cảm xúc sớm, proof rải xuống giữa):

| Thứ tự | Khối | Vai trò |
|---|---|---|
| 1 | Hero | hook |
| 2 | Trust strip (1 dòng) | credibility nhanh |
| 3 | Pain | gãi nỗi đau |
| 4 | Scale without hiring ⭐ | cú aha |
| 5 | How it works + canvas demo | dạy cơ chế (động) |
| 6 | Ready-to-run pipelines ⭐ | bằng chứng giá trị |
| 7 | Capability stats (count-up) | "by the numbers" — *đã dời xuống đây từ sau hero* |
| 8 | Teams by role | chiều sâu team |
| 9 | AI employees know your brand | chất lượng đầu ra |
| 10 | Publish & deploy ⭐ | sức mạnh & tái dùng |
| 11 | Integrations grid | "nối vào stack của bạn" — *đã dời xuống cạnh Publish* |
| 12 | Stay in control (3 trụ) | gỡ nỗi sợ tin tưởng |
| 13 | Social proof (placeholder) | chờ traction thật |
| 14 | Pricing teaser | giảm ma sát |
| 15 | FAQ | gỡ câu hỏi cuối |
| 16 | Final CTA | chốt |
| 17 | Footer | điều hướng + đổi ngách |

> 2 thay đổi so với bản nháp: **Capability stats** dời từ ngay-sau-hero → sau Pipelines (#7);
> **Integrations grid** dời lên-đầu → cạnh Publish & deploy (#11). Lý do: tránh dồn 3 dải
> proof trước Pain, giữ hook cảm xúc gần hero.

---

## Motion & "sinh động" — nguyên tắc chung (áp cho mọi khối)

Trang không được toàn card tĩnh. Nhưng **tiết chế** — quá nhiều animation lại thành rẻ tiền
/ giống trang AI dựng máy. Chỗ nên có chuyển động:

- **Count-up khi cuộn tới:** mọi con số lớn (năng lực sản phẩm, calculator) đếm từ 0 lên
  giá trị thật khi vào viewport (IntersectionObserver, chạy 1 lần). Tôn trọng `prefers-reduced-motion`.
- **Canvas demo động** ở khối 5 (đã có) — node dựng + dây nối + run pulse.
- **Staggered entrance** cho list/grid (đã có ở app: `card-animate`, delay ~60–80ms/item).
- **Hover micro-interaction:** card nhấc nhẹ + đổi viền; nút scale(0.98) khi bấm.
- **Roster hero "sống":** chấm trạng thái nhấp nháy nhẹ, 1 giá trị đổi số định kỳ (illustrative).
- Sau này: thay animation dựng bằng **GIF/video quay app thật** ở khối 5 & 6.

### ⚠️ Số liệu — CHỈ dùng số thật (chưa release, chưa có traction)

- ❌ **KHÔNG bịa traction:** "10,000+ videos created", "500 happy sellers"… — chưa có gì hậu
  thuẫn = fake social proof, phản tác dụng. Để **trống slot** testimonial/logo/traction, gắn sau.
- ✅ **Được dùng ngay (số thật, kiểm chứng được):** năng lực sản phẩm — `30+ tools`,
  `19 node types`, `3 AI models`, `6 templates`. → khối 2b.
- ✅ **Calculator ước tính (khách tự nhập):** "time saved" — trung thực vì do người dùng
  nhập + ghi rõ *estimate*. → khối 4.

---

## 1. Hero  ⭐

- **Việc:** hook — bạn là ai + lời hứa, trong 5 giây.
- **Nền:** trắng (giống app), chữ gần đen. KHÔNG glow / glass / gradient phủ chữ. Nút chính
  đen; màu chỉ điểm ở chấm trạng thái trong roster. *(Nếu muốn tương phản mạnh, có thể cho
  hero nền navy dark-mode app — nhưng mặc định để light, xem brand-kit.)*
- **Headline:** `Hire` <span nhấn>`AI employees`</span> `for your POD store`
- **Sub:** `Research, ad videos, listings — your AI employees handle the repetitive work so you can focus on growth. Run 1 or 100, same effort.`
- **CTA:** `Start free` (chính) · `See a real workflow run →` (phụ, scroll).
- **Khối phải — "your team, running now"** (không phải stat-card chung chung):
  danh sách hairline, mỗi dòng 1 nhân viên + dot trạng thái + vai + tiến độ:
  - 🟢 `Niche Researcher` · research · `live`
  - 🟣 `Video Ad Maker` · design · `rendering 2/5`
  - 🟡 `Listing Writer` · content · `142`
  - ⚪ `Support Agent` · cs · `idle`
- (Số "rendering 2/5", "142" ngầm gợi chạy hàng loạt → dẫn vào khối 4.)

## 2. Trust strip (dải mỏng)

- **Việc:** trấn an nhanh, tạo tin cậy tức thì.
- 1 dòng: `Powered by GPT-4o · Claude · Gemini` + (khi có) logo store/khách dùng.
- Chưa có khách → thay bằng: `Built-in integrations: Google · TikTok Ads · Shopify · WordPress · Telegram · Notion`.

## 2b. Capability stats — số THẬT, đếm tăng khi cuộn tới

- **Việc:** tạo cảm giác "sản phẩm dày dặn" bằng số kiểm chứng được, thay cho số traction chưa có.
- 4 con số count-up (0 → giá trị) khi vào viewport:
  - `30+` — `built-in tools`
  - `19` — `workflow blocks`
  - `3` — `top AI models (GPT-4o, Claude, Gemini)`
  - `6` — `ready-to-run templates`
- Dạng band mỏng, nền `#f9fafb`, số lớn đậm (đen) + nhãn xám. KHÔNG tô màu số.
- *(THẬT: đếm từ tool-registry, `CustomNodes.tsx` (19 node), ModelSettingsTab, templates.
  Trước khi build nhớ đối chiếu lại con số cho khớp bản mới nhất của app.)*

## 2c. Integrations grid — biến "1 dòng chữ" thành bằng chứng trực quan

- **Việc:** landing đẳng cấp nào cũng có lưới logo tích hợp — đang bị giấu trong 1 dòng chữ
  ở khối 2, nâng lên thành khối riêng có sức nặng.
- **Section title:** `Connects with the tools you already use`
- **Section sub:** `Google, TikTok Ads, WordPress, Slack, Notion, Telegram, GitHub — plus MCP and HTTP for everything else.`
- Lưới 7–8 logo (grayscale, lên màu khi hover) + 1 tile cuối `+ MCP & HTTP` cho phần mở rộng.
- *(THẬT — chỉ dùng integration đã verify OAuth/connector: Google, TikTok Ads, WordPress,
  Slack, Notion, Telegram, GitHub — `providers/*.provider.ts`. ⚠️ Shopify KHÔNG đưa vào lưới
  này — chỉ xuất hiện trong tên 1 pipeline/template ở khối 6, chưa verify có OAuth/publish
  connector thật; cần verify code trước khi claim là "tích hợp".)*

## 3. Pain — "Where is your time going?"

- **Việc:** gãi đúng chỗ ngứa của POD operator.
- **Section title:** `Where is your time going?`
- 3 nỗi đau, mỗi cái 1 dòng + icon:
  - 🔍 `Spending all day on niche research and competitor spying`
  - 🎬 `Making product/ad videos by hand, slow and tedious`
  - 📝 `Writing titles, descriptions, and tags for hundreds of products`
- → Chốt: `Hand it all to your AI employees — go focus on something else.`

## 4. ⭐ Scale without hiring — KEY FEATURE

- **Việc:** cú "aha" khác biệt lõi. Đặt sớm, có animation minh hoạ.
- **Section title:** `Scale without hiring`
- **Thông điệp:** `Hiring people costs salary and time. AI employees: run 1 or 100, same effort.`
- **Minh hoạ ngôi sao — CALCULATOR TƯƠNG TÁC (số chạy):** slider `PRODUCTS / MONTH` (10 → 500).
  Khách kéo → 2 số chạy lên tức thì:
  - `Videos your AI team creates` = số sản phẩm (khớp 1:1).
  - `Hours you save this month` ≈ số sản phẩm × ~12 phút / 60 — **ghi rõ dưới đó**:
    `*Rough estimate, ~12 min saved per product.*`
  - Badge giữ nguyên: `your effort: unchanged`.
  - Đây là "số chạy tăng trưởng" trung thực: do khách nhập + có nhãn *estimate*, không phải traction bịa.
- **3 ý phụ (card title + mô tả):**
  - `Design it once` — `Build the workflow once; your AI employees repeat it endlessly.`
  - `Change the input, not the effort` — `100 more products isn't 100 more hours of work.`
  - `Runs while you sleep` — `Trigger it on a schedule, via webhook, or through the API.`
- *(THẬT: `Loop node` lặp qua dataset; trigger `Schedule (cron)` + `Webhook`; publish thành API —
  `CustomNodes.tsx`, `useWorkflowExecution.ts`, `workflow-publish.controller.ts`.)*
- **Ranh giới:** "handles repetitive work + scales output", KHÔNG "AI runs your whole store".

## 5. ⭐ How it works — 3 bước + DEMO TRỰC QUAN (dạy mental model, khối cần "sống")

- **Việc:** cho người không kỹ thuật hiểu cơ chế trong 10 giây — và đây là khối cần chuyển
  động để phá vỡ nhịp toàn chữ/card tĩnh của trang. Bố cục: 3 bước text bên trái (hoặc trên)
  + **canvas demo động** bên phải (hoặc dưới) minh hoạ đúng bước 2 "Connect it to a workflow".
- **Section title:** `How it works`
1. `Hire an AI employee` — `Pick a role: Research, Design, Listings, or Support.`
   *(THẬT: agent có avatar, role, system prompt, department, skills — `AgentModal.tsx`.)*
2. `Connect it to a workflow` — `Drag and drop, or start from a template.`
   *(THẬT: canvas 19 node types — `CustomNodes.tsx`.)*
3. `Let it run` — `On demand, on a schedule, or triggered by your store.`
   *(THẬT: trigger Webhook/Schedule-cron/Manual — `useWorkflowExecution.ts`.)*

### Canvas demo — 2 lớp triển khai

**Lớp 1 (dùng ngay, không cần chờ):** animation SVG/CSS loop, tự dựng, ~4–6s/vòng:
- 3–4 node-box xuất hiện lần lượt (fade + scale nhẹ) theo đúng tên thật: `Trigger` →
  `Scan Market Demand` → `Write Article` → `Publish`.
- Sau mỗi node xuất hiện, một đường nối (SVG path, bo cong nhẹ) "vẽ" từ node trước sang
  node sau (stroke-dashoffset animate).
- Khi đủ node, chạy 1 vòng "execution": từng node sáng viền xanh lá theo thứ tự (giống
  trạng thái chạy thật trong app — xem `--running-glow`/`--done-glow` ở `globals.css`),
  rồi fade tất cả về lại và loop.
- Tôn trọng `prefers-reduced-motion`: fallback về ảnh tĩnh 1 frame đẹp nhất (đủ node + dây nối).

**Lớp 2 (nâng cấp khi ra mắt chính thức — ưu tiên hơn):** thay animation dựng bằng
**GIF/video quay màn hình thật** từ canvas app — kéo node, nối dây, bấm chạy, xem SSE
sáng dần theo thời gian thực. Chân thực và thuyết phục hơn animation tự dựng nhiều.
Ghi vào checklist quay demo ở `04-nextjs-setup.md`.

## 6. ⭐ Ready-to-run POD pipelines — KEY FEATURE (convert mạnh nhất)

- **Việc:** bằng chứng giá trị cụ thể cho POD. Đây là phần chốt đơn.
- **Section title:** `Pipelines built for POD sellers`
- **Section sub:** `Four ready-made pipelines. Every step is a real tool inside Workdy — use it as is, no setup required.`
- 4 pipeline dạng card, mỗi card có mini-diagram luồng. **Mọi bước map vào tool có thật.**
  Nhấn: đây là **template bấm-là-chạy** (app đã có "Shopify Competitor", "Video Sales").

| # | Pipeline (on-page) | Steps shown as chips (tool THẬT trong tool-registry) |
|---|----------|----------------------------------------|
| 1 | `Find a winning niche` | Scan Market Demand → Detect Competitors → Company Deep Dive → Report |
| 2 | `Produce an ad video` | Analyze Product Images → Find Creative Angle → Generate Storyboard → Generate Video |
| 3 | `Write listings at scale` | Keyword Research → Write Article (title/desc/tags) → Human review → Publish (WordPress/Shopify) |
| 4 | `Run and optimize ads` | TikTok Campaigns → Ads Performance Sync → Report |

- Mỗi card: category tag (`Research` / `Creative` / `Content` / `Ads`) + tên pipeline +
  1 dòng lợi ích + dãy chip bước + CTA `Use this template →`.
- Copy lợi ích gợi ý (đặt dưới tên pipeline):
  - `Find a winning niche` → `Spot demand, size up competitors, get a decision-ready report in minutes.`
  - `Produce an ad video` → `From product photos to a finished ad video — no manual editing.`
  - `Write listings at scale` → `Titles, descriptions, and tags for hundreds of products, with a review step before anything goes live.`
  - `Run and optimize ads` → `Sync campaign performance and get an automatic daily report.`
- Nếu có: nhúng GIF/video 1 pipeline chạy thật (mạnh hơn ảnh tĩnh).

## 7. Teams by role

- **Việc:** đào sâu concept "team" — mỗi nhân viên AI một việc, như phòng ban thật.
- **Section title:** `A team for every department`
- `Departments` — `Marketing / SEO / Sales / Support / Design, each with its own analytics (conversations, tokens, tool calls, satisfaction).`
- `Multi-model` — `Pick GPT-4o, Claude, or Gemini for each employee based on the job.`
- *(THẬT: `AgentModal.tsx`, department grouping, per-agent analytics.)*

## 8. AI employees that know your brand

- **Việc:** trả lời câu hỏi "AI làm có ra chất shop tôi không?" → gỡ nghi ngờ chất lượng.
- **Section title:** `AI employees that know your brand`
- `Knowledge base` — `Upload PDFs, docs, or index a URL — your AI employees write from your own material.`
- `Brand voice` — `Output that sounds like your store, not a generic bot.`
- `Long-term memory` — `Remembers preferences, brand details, and context across conversations.`
- *(THẬT: `Knowledge.tsx`, `Memories.tsx`, URL indexing + embedding; RAG đa cấp chung/agent/skill.)*

## 9. ⭐ Publish & deploy — KEY FEATURE

- **Việc:** dựng 1 lần → đem đi dùng khắp nơi. Nối lại câu chuyện "đội tự bồi kỹ năng cho nhau".
- **Section title:** `Publish once, use everywhere`

**A. Publish a WORKFLOW as:**
- `A tool for other AI employees` — `Turn a workflow into a shared skill other agents can call — build once, reuse everywhere.`
- `An API` — `Get an API key, rate limits (RPM + daily), and auto-generated docs in curl, Python, and JavaScript.`
- `A webhook / automated trigger` — `Trigger by webhook, on a schedule, or run async with streaming, stop, and status support.`
- `Versioning` — `Publishing freezes a version and keeps history — edit safely without breaking what's live.`
- *(THẬT: `workflow-publish.controller.ts`, `ApiDocsModal.tsx`, tool-registry.)*

**B. Deploy an AI employee to chat** ⚠️ (đã VERIFY code — bám đúng trạng thái):
- ✅ **Telegram** — `Chat with your AI employee right in Telegram.` Bot 2 chiều thật: nhận
  tin → agent xử lý → reply, giữ mạch hội thoại. *(THẬT: `telegram.bot.ts`, `telegram.routes.ts`.)*
  - ⚠️ Nuance: hiện là **user liên kết Telegram cá nhân để chat với AI employee của mình**,
    CHƯA phải "public support bot cho nhiều khách". **Đừng bán góc customer support** trên
    Telegram cho tới khi xác nhận roadmap.
- ⚙️ **Slack** — copy đúng mức: `Your AI employee can send and search messages in Slack`
  (gọi qua MCP). KHÔNG nói "Slack bot that listens and replies". *(THẬT: `slack.provider.ts`
  — OAuth + auto MCP.)*
- 🔜 **"Coming soon" strip:** `Lark/Feishu, Larkbase as a data source, and a web chat widget.`
  (Lark hiện là *Coming Soon* trong app, mới đọc được Lark Sheet/Bitable làm data source.)
  Gợi tầm nhìn, KHÔNG hứa như đã có.

**C. For developers (chừa cửa tệp technical):** `Need something custom? Call an HTTP endpoint, run JavaScript, or connect your own MCP server.`

- **Không đưa lên:** khái niệm "deploy agent as a standalone channel bot" — code chưa có
  bảng deployment/channel, đừng vẽ ra.

## 10. Built for trust — 3 trụ kiểm soát

- **Việc:** gỡ rào cản tin tưởng — "giao cho AI lỡ nó làm bậy thì sao?" + "dữ liệu/API key của
  tôi có bị khoá cứng không?". Landing đẳng cấp nào cũng có 1 khối an tâm dạng này; thêm trụ
  thứ 3 (BYO key) biến nó thành điểm bán thay vì chỉ phòng thủ.
- **Section title:** `Stay in control`
- `Human review` — `Approve before anything goes live, with custom review forms.` (HITL node)
- `AI Copilot` — `Flags workflow errors and points you straight to the node that needs fixing.`
  *(khác biệt: ít tool nhỏ có)*
- `Bring your own API key` — `Connect your own OpenAI, Anthropic, or Gemini key. You control which model runs — never locked into one provider.`
  *(THẬT: per-user AI config với apiKey riêng — `ModelSettingsTab.tsx`. ⚠️ Chỉ nói "control
  provider/cost", KHÔNG claim về data residency/ownership — chưa verify dữ liệu có tách
  riêng theo key hay không, đừng suy diễn thêm.)*
- *(THẬT: HITL node — `CustomNodes.tsx`; `AICopilotInsights.tsx`.)*

## 11. Social proof (làm dần)

- **Việc:** bằng chứng xã hội.
- Testimonial + logo store. Chưa có → thay bằng **Template Gallery** section title:
  `Start from a template, not a blank canvas.`

## 12. Pricing teaser

- **Việc:** giảm ma sát quyết định.
- 1 dòng: `Start free — upgrade when you need to.` Nút `Start free`.
- App đã có Usage/token tracking → sau gắn pricing theo usage dễ.

## 12b. FAQ

- **Việc:** gỡ nốt câu hỏi còn sót trước khi khách rời trang — chuẩn của mọi landing đẳng cấp.
- **Section title:** `Frequently asked questions`
- 6 câu, accordion (mở 1 câu, đóng câu khác):
  1. `Do I need to know how to code?` — `No. Hire an AI employee, pick a template, and connect it with drag and drop. HTTP, JavaScript, and MCP are there if you want to go further.`
  2. `What AI models does Workdy use?` — `GPT-4o, Claude, and Gemini — pick per employee, or bring your own API key.`
  3. `How is this different from Zapier or n8n?` — `Those are general automation tools. Workdy comes with AI employees and ready-to-run pipelines built for POD sellers — niche research, ad videos, listings, and ads — so you're not starting from a blank canvas.`
  4. `Can I review what my AI employees do before it goes live?` — `Yes. Add a human review step to any workflow — nothing publishes without your approval.`
  5. `Can I connect Workdy to my own tools?` — `Yes — Google, TikTok Ads, WordPress, Slack, Notion, and Telegram are built in. For anything else, use HTTP, JavaScript, or your own MCP server.`
  6. `What does it cost?` — `Start free. Upgrade when you need to.`
- *(THẬT: câu 1,2,4,5 bám đúng khối 5/7/10/9/2c. Câu 3 là positioning, không phải claim kỹ
  thuật — an toàn. Câu 6 khớp khối 12, chưa có bảng giá chi tiết nên giữ ngắn.)*

## 13. Final CTA

- **Việc:** chốt hành động.
- Nền `#f9fafb` (hoặc navy dark-mode app nếu muốn nhấn) — tách khỏi section trắng phía trên.
- **Headline:** `Hire your first AI employee today.`
- Form email hoặc nút `Start free` → `app.workdy.ai`.

## 14. Footer

- **Việc:** điều hướng + chừa đường đổi ngách.
- Logo + tagline ngắn (gợi ý: `AI employees for growing businesses.`).
- Cột: `Product` / `Resources` / `Company` / `Legal`.
- **Ở đây (không phải hero)** mới đặt dòng general-purpose: `Workdy also works for
  marketing, sales, support, and automation in general.` + mục nhỏ RBAC/team/SSO.

---

## Bảng phủ tính năng (mọi feature có nhà)

| Tính năng thật | Khối |
|---|---|
| Agent (vai/prompt/skills), department, analytics | 1, 7 |
| Multi-model (GPT/Claude/Gemini) | 2, 7 |
| Workflow canvas, 19 node, template | 5, 6 |
| Loop / schedule / batch → **scale** | 4 |
| 30+ tool (SEO, content, video, market intel, ads) | 6 |
| Tích hợp (Google, TikTok, WordPress, Notion...) | 2, 6 |
| Knowledge/RAG, brand voice, memory | 8 |
| Publish → Tool / API / Webhook, versioning | 9A |
| Telegram (chat 2 chiều) ✅ / Slack (gọi tool) ⚙️ | 9B |
| Lark / Larkbase / web widget 🔜 | 9B (dải "Coming soon") |
| HTTP / Code / MCP (cho dev) | 9C, 2c |
| Integration logos (Google, TikTok, WordPress, Slack, Notion, Telegram, GitHub) | 2c |
| HITL (duyệt), AI Copilot (bắt lỗi), BYO API key | 10 |
| Usage/token tracking | 12 |
| RBAC / team / invite / SSO | 14 (mục nhỏ) |

## KHÔNG đưa lên (đợt đầu)

- Chữ **"Enterprise"** ở hero (hút sai tệp).
- RBAC / team / SSO ở vị trí cao (để mục nhỏ ở footer).
- Node/thuật ngữ kỹ thuật ở hero.
- "Public support bot" trên Telegram, "deploy agent as a channel bot" — code chưa với tới.
- Tính năng còn là stub: real-time co-authoring, workflow fork/branch, custom metrics reporting.
- **Bất kỳ copy tiếng Việt nào trên trang** — landing 100% tiếng Anh (xem đầu file).
- **Logo "Shopify"** trong lưới tích hợp (2c) hoặc claim "Shopify publish" ở khối 6 — CHƯA
  verify có connector thật, chỉ mới xuất hiện trong tên template. Verify code trước khi ship.
- **Claim data residency/ownership** ở mục "Bring your own API key" (10) — chỉ nói control
  provider/cost, không suy diễn thêm về nơi lưu dữ liệu.

## Vẫn còn thiếu, để dành cho sau khi có traction (không phải việc của đợt này)

- Testimonials / case study thật, logo khách hàng thật, badge (G2, Product Hunt...).
- Bảng so sánh "Workdy vs Zapier/n8n" chi tiết (tốn công duy trì — làm khi rảnh, không cản trở launch).
- Bảng giá đầy đủ (hiện chỉ có teaser ở khối 12).

## Thứ tự dựng đề xuất

1. Hero (1) — bộ mặt.
2. Use-case pipelines (6) + Scale (4) — 2 khối convert mạnh nhất, dựng sớm.
3. How it works (5) + Teams by role (7).
4. Capability stats (2b) + Integrations grid (2c) + FAQ (12b) — nhanh, không phụ thuộc thứ khác.
5. Còn lại ghép sau.
