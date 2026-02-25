// ============================================================
// task-nav.js — Shared renderer for all VPMM task pages
// Each task HTML stub calls: renderTaskPage('sun1')
// ============================================================

const DAY_META = {
  sun: { name: 'Sunday',    theme: 'Thesis ✍️📜',                 color: '#ffd700', colorDark: '#b8a000', grad: ['#f6d365','#fda085'] },
  mon: { name: 'Monday',    theme: 'Shoot Footage 📸🖥️',           color: '#ff6b6b', colorDark: '#cc4444', grad: ['#ff6b6b','#ee0979'] },
  tue: { name: 'Tuesday',   theme: 'Synthesis 🎬🧬',               color: '#51cf66', colorDark: '#2f9e44', grad: ['#51cf66','#0caf91'] },
  wed: { name: 'Wednesday', theme: 'Generate Code 🎨🖼️',          color: '#9f7aea', colorDark: '#6741d9', grad: ['#9f7aea','#667eea'] },
  thu: { name: 'Thursday',  theme: 'AI Backgrounds ✨🎞️',          color: '#a78bfa', colorDark: '#7c3aed', grad: ['#a78bfa','#6d28d9'] },
  fri: { name: 'Friday',    theme: 'Place Assets 🛠️📦',            color: '#ed8936', colorDark: '#c05621', grad: ['#ed8936','#f7971e'] },
  sat: { name: 'Saturday',  theme: 'Final Cut & Publish 🚀🌐',     color: '#48bb78', colorDark: '#276749', grad: ['#48bb78','#38f9d7'] },
};

const DAY_ORDER = ['sun','mon','tue','wed','thu','fri','sat'];

const ALL_TASKS = {

  // ──────────────────────────────────────────────────────────
  // SUNDAY — Thesis
  // ──────────────────────────────────────────────────────────
  sun1: {
    dayId: 'sun', emoji: '✏️',
    title: 'Brainstorm Topic & Core Thesis',
    fullLabel: 'Brainstorm topic and core thesis statement on pen and paper',
    svgEmojis: ['💡','✏️','📝','🧠'],
    brief: 'Kick off the week by unplugging from screens and getting raw ideas onto paper. This is your creative pressure-release valve — write messy, write fast, write everything.',
    why: 'Analog brainstorming bypasses the inner critic. When you write with a pen, you generate 30% more original ideas than typing because the slower speed forces deeper cognitive engagement. Your thesis — the ONE thing viewers must remember — emerges from this chaos.',
    steps: [
      '📵 Put your phone in another room for 20 minutes',
      '✏️ Write your video topic at the top of a blank page',
      '💡 Brain-dump every angle, question, and hook that comes to mind',
      '⭕ Circle the strongest thesis statement',
      '🔢 List 3 key arguments that support that thesis',
      '📸 Photograph your notes for mobile GPT processing',
    ],
    tips: [
      'Ask yourself: "What would surprise my viewer in the first 10 seconds?"',
      'Write the title last — after you know the thesis',
      'If you have more than one thesis, you have more than one video',
    ],
    tools: ['Pen & blank paper', 'Sticky notes (for clustering ideas)', 'Timer (20 min)'],
    maturityImpact: 'Pre-Production Planning → Level 3 Defined',
  },

  sun2: {
    dayId: 'sun', emoji: '🤖',
    title: 'GPT Script Rewrite from Handwritten Notes',
    fullLabel: 'Give handwritten notes to mobile GPT to rewrite as professional script',
    svgEmojis: ['📱','🤖','✍️','🔄'],
    brief: 'Transform your raw handwritten brainstorm into a polished, professional script by feeding it to a mobile AI assistant. This bridges the gap between creative chaos and structured output.',
    why: 'AI-assisted rewriting preserves your authentic voice while elevating structure, grammar, and flow. You provide the ideas; GPT provides the architecture. The result is a script that sounds like you — but better.',
    steps: [
      '📸 Photograph your handwritten brainstorm notes',
      '📱 Open ChatGPT / Claude mobile app',
      '🖼️ Upload the photo and paste this prompt:',
      '"Rewrite these handwritten notes as a YouTube video script. Keep my voice. Structure: Hook → Problem → Solution → CTA. Target length: 10 minutes."',
      '🔄 Iterate with follow-up prompts to refine tone',
      '📋 Copy the output to your notes app (Obsidian / Notion)',
    ],
    tips: [
      'Specify the target audience in your prompt ("for DevOps engineers")',
      'Ask GPT to write 3 different hook options and pick the best',
      'Always read the output aloud — if it sounds robotic, iterate',
    ],
    tools: ['ChatGPT mobile / Claude.ai', 'Obsidian or Notion', 'Camera (to photograph notes)'],
    maturityImpact: 'Scripting & Storytelling → Level 3 Defined',
  },

  sun3: {
    dayId: 'sun', emoji: '📋',
    title: 'Outline Video Structure (Intro → Body → Conclusion)',
    fullLabel: 'Outline video structure (intro, body, conclusion)',
    svgEmojis: ['📋','🗂️','🔢','🎯'],
    brief: 'Structure your script into a clear three-act flow. A well-structured video retains viewers — a rambling one loses them at the 30-second mark.',
    why: 'YouTube analytics show that videos with a clear promise in the intro retain 65% more viewers through the first 2 minutes. Your outline is the viewer retention blueprint. Without it, you are filming blind.',
    steps: [
      '🎣 HOOK (0-30s): Write a bold opening statement or visual promise',
      '🔍 INTRO (30s-2min): State the problem and why they should care',
      '📚 BODY (2-10min): Break into 3-5 clear sections with timestamps',
      '🎯 CTA (final 60s): Single action item — subscribe / link / comment',
      '⏱️ Estimate time for each section and adjust total length',
      '🖼️ Note what visual/screencap supports each section',
    ],
    tips: [
      'The hook must deliver on what the thumbnail promises',
      'Each body section should have its own mini-conclusion',
      'Write the CTA before the body — it clarifies your goal',
    ],
    tools: ['Notion / Obsidian', 'Google Docs', 'Whiteboards'],
    maturityImpact: 'Scripting & Storytelling → Level 3 Defined',
  },

  sun4: {
    dayId: 'sun', emoji: '📜',
    title: 'Write Full Script with Timestamps & Visual Notes',
    fullLabel: 'Write full script with timestamps and visuals notes',
    svgEmojis: ['📜','⏱️','🎬','📝'],
    brief: 'Transform the outline into a word-for-word teleprompter script with embedded visual cues. This is your production bible for the entire week.',
    why: 'A full script with visual notes reduces post-production time by 40%. When your editor (or future-you) sees [SHOW CODE SCREENSHOT] next to a sentence, they know exactly what B-roll to cut in — no guessing, no wasted time.',
    steps: [
      '📝 Write every word as you will say it on camera',
      '⏱️ Add timestamps every 2 minutes: [00:02:30 — Section 2]',
      '🖼️ Add visual notes in brackets: [SHOW terminal screenshot]',
      '🎤 Add delivery notes in parentheses: (slow down here)',
      '🔢 Number each scene for DaVinci Resolve alignment',
      '📤 Export to Elgato Prompter format (plain text)',
    ],
    tips: [
      'Write at 80% of your natural speaking pace — pauses get cut',
      'Short sentences are easier to read on a prompter',
      'Highlight the 3 most important sentences — make them land',
    ],
    tools: ['Elgato Prompter app', 'Google Docs', 'Obsidian'],
    maturityImpact: 'Scripting & Storytelling → Level 4 Managed',
  },

  // ──────────────────────────────────────────────────────────
  // MONDAY — Antithesis (Shoot)
  // ──────────────────────────────────────────────────────────
  mon1: {
    dayId: 'mon', emoji: '🌅',
    title: 'Wake Up at 5 AM & Prepare for Shooting',
    fullLabel: 'Wake up at 5 AM and prepare for shooting',
    svgEmojis: ['⏰','🌅','☕','🎬'],
    brief: 'The 5 AM ritual is your unfair advantage. While the world sleeps, you build. Set up your shooting space, review your script, and get your mind and gear camera-ready before sunrise.',
    why: 'Early morning shooting gives you 2-3 hours of consistent indoor light before the sun creates harsh shadows. It also ensures zero interruptions — no calls, no Slack messages, no mental overhead from the day\'s chaos.',
    steps: [
      '⏰ Alarm set to 05:00 — no snooze',
      '☕ Coffee / water before screens',
      '📺 Review your script for 10 minutes',
      '💡 Set up and test lighting rig',
      '🎤 Check microphone levels with a 30-second test recording',
      '📹 Frame your shot and set focus manually',
      '🔋 Charge all batteries and confirm SD card has space',
    ],
    tips: [
      'Lay out all your gear the night before — decision fatigue is real at 5 AM',
      'Record a 30-second test clip and watch it back before the full shoot',
      'Keep a "shoot prep" checklist on your phone for quick review',
    ],
    tools: ['Camera (iPhone 14 Pro / mirrorless)', 'Ring light / key light', 'Microphone + interface'],
    maturityImpact: 'Recording & Equipment → Level 3 Defined',
  },

  mon2: {
    dayId: 'mon', emoji: '📜',
    title: 'Load Script into Elgato Prompter',
    fullLabel: 'Load script into Elgato Prompter for teleprompter',
    svgEmojis: ['📜','👁️','🎥','📱'],
    brief: 'Transfer your polished script into Elgato Prompter so you can read it naturally while looking directly at the camera lens — the key to confident, connected delivery.',
    why: 'A teleprompter eliminates the "reading from notes" look that destroys credibility. Eye contact with the lens = eye contact with your viewer. Combined with a natural script, this is the difference between a presenter and a creator.',
    steps: [
      '📋 Copy your final script from Obsidian / Google Docs',
      '📱 Open Elgato Prompter app on iPad / phone',
      '📤 Paste script and format (remove visual notes — just spoken words)',
      '⚡ Adjust scrolling speed to match your natural pace',
      '📹 Position the prompter directly behind the camera lens',
      '🎬 Do a full run-through at speed before recording',
    ],
    tips: [
      'Set scroll speed slightly slower than comfortable — you\'ll speed up when nervous',
      'Increase font size to 40pt+ so your eyes don\'t scan',
      'Slightly bold the first word of each sentence for quick re-sync',
    ],
    tools: ['Elgato Prompter hardware or app', 'iPad / tablet mount'],
    maturityImpact: 'Recording & Equipment → Level 3 Defined',
  },

  mon3: {
    dayId: 'mon', emoji: '🎤',
    title: 'Shoot Talking Head Footage',
    fullLabel: 'Shoot talking head footage with post-production plan in mind',
    svgEmojis: ['🎤','📹','🎬','💪'],
    brief: 'Record your on-camera segments with full awareness of how they will be edited. Every shot decision — framing, pacing, pauses — is made with post-production efficiency in mind.',
    why: 'Filming with your edit in mind reduces post-production time by 50%. Deliberate pauses create natural cut points. Consistent framing means fewer awkward jump cuts. You are not just an actor — you are also your own director.',
    steps: [
      '🎬 Shoot a slating frame: hold up fingers showing take number',
      '🎤 Check audio levels (aim for -12 to -6 dB peaks)',
      '📹 Record in 4K even if delivering 1080p (gives zoom headroom)',
      '⏸️ Pause 2 seconds at the start and end of each sentence',
      '🔄 Shoot 2-3 takes of important sections',
      '📝 Note the best take number for each section during shooting',
    ],
    tips: [
      'Vary your energy level across takes — pick the most authentic',
      'Speak 20% slower than feels natural — it cuts perfectly',
      'If you stumble, stay still for 3 seconds then re-do from a natural break point',
    ],
    tools: ['Camera', 'Elgato Prompter', 'Lavalier or shotgun mic', 'Lighting setup'],
    maturityImpact: 'Recording & Equipment → Level 4 Managed',
  },

  mon4: {
    dayId: 'mon', emoji: '🖥️',
    title: 'Capture Screen Recordings for Demos',
    fullLabel: 'Capture screen recordings for demos',
    svgEmojis: ['🖥️','🖱️','📸','⌨️'],
    brief: 'Record all screen-based content — terminal commands, IDE code, browser demos — with a systematic approach that makes editing fast and precise.',
    why: 'Poorly recorded screen captures are the #1 complaint in tech tutorial comments. Fuzzy resolution, cursor flying around, missing context — all fixable with a 5-minute setup ritual. Quality screen recordings make the difference between a confusing and an illuminating tutorial.',
    steps: [
      '🖥️ Set display resolution to 1920×1080 before recording',
      '🔡 Increase font size to 18pt in terminal / IDE',
      '🎯 Hide distracting menu bar icons and notifications',
      '⏺️ Start OBS or built-in recorder (⌘+Shift+5 on Mac)',
      '🐌 Type commands slowly — editors cannot speed up pauses cleanly',
      '📁 Save recordings with scene numbers matching your script',
    ],
    tips: [
      'Use a clean browser profile with no bookmarks visible',
      'Record 3 extra seconds before and after each demo segment',
      'On Mac: System Settings → Displays → turn off Dynamic Resolution',
    ],
    tools: ['OBS Studio (free)', 'Quicktime (Mac built-in)', 'Clean desktop / fresh terminal'],
    maturityImpact: 'Recording & Equipment → Level 3 Defined',
  },

  mon5: {
    dayId: 'mon', emoji: '☁️',
    title: 'Upload Raw Footage to Google Drive',
    fullLabel: 'Upload raw footage to Google Drive',
    svgEmojis: ['☁️','📁','⬆️','💾'],
    brief: 'Back up all raw footage to Google Drive immediately after shooting. Never lose a take — especially on shoot day when everything is fresh and re-shooting is still possible.',
    why: 'Hard drives fail. Cards corrupt. Laptops get stolen. Google Drive is your safety net and your file-sharing solution for future collaboration. One good backup habit prevents one catastrophic loss.',
    steps: [
      '📁 Create a dated folder: `2026-W08-VideoTitle/`',
      '📹 Sub-folders: `01_Talking_Head/`, `02_Screen_Captures/`, `03_Photos/`',
      '⬆️ Start upload immediately (runs in background while you work)',
      '✅ Verify all files appear in Drive before formatting cards',
      '📝 Add a README.txt with: topic, date, camera settings, best takes',
      '🔗 Copy the Drive folder link to your Obsidian shoot notes',
    ],
    tips: [
      'Use Google Drive desktop app for automatic background sync',
      'Name files with take numbers: `talking_head_T01.mp4`, `talking_head_T02.mp4`',
      'Keep local copy on an external SSD until video is published',
    ],
    tools: ['Google Drive (desktop app)', 'External SSD (local backup)', 'SD card reader'],
    maturityImpact: 'Publishing & Distribution → Level 3 Defined',
  },

  mon6: {
    dayId: 'mon', emoji: '📓',
    title: 'Create Obsidian Notes for the Session',
    fullLabel: 'Create Obsidian notes for the session',
    svgEmojis: ['📓','🔗','🗒️','🧠'],
    brief: 'Document the shoot session in Obsidian — what worked, what to fix, best takes, and links to all raw materials. This note becomes the single source of truth for the entire production.',
    why: 'Without session notes, you spend 30+ minutes searching for "that one good take" in an unnamed folder three days later. Obsidian notes with proper links to Drive folders and script sections create an instant production map that saves hours in post.',
    steps: [
      '📋 Create note: `[[2026-W08-VideoTitle-ShootLog]]`',
      '📝 Record: camera settings, lighting notes, best takes per section',
      '🔗 Link to: script, Drive folder, thumbnail concept',
      '⚠️ Note any problems: background noise, bad framing, missed lines',
      '💡 Write 3 ideas that came up during the shoot for future videos',
      '📊 Log: total footage recorded (GB), total clips',
    ],
    tips: [
      'Use Obsidian Templates for consistent shoot log structure',
      'Tag notes with #shoot-log and the video topic for easy search',
      'Link to the `[[4_Formula/editing-formula]]` note for edit guidance',
    ],
    tools: ['Obsidian (free)', 'Or Notion / Bear / any markdown app'],
    maturityImpact: 'Analytics & Feedback Loop → Level 3 Defined',
  },

  // ──────────────────────────────────────────────────────────
  // TUESDAY — Synthesis (Edit Assembly)
  // ──────────────────────────────────────────────────────────
  tue1: {
    dayId: 'tue', emoji: '🎬',
    title: 'Import Footage into DaVinci Resolve',
    fullLabel: 'Import footage into DaVinci Resolve',
    svgEmojis: ['🎬','📥','🎞️','💻'],
    brief: 'Set up your DaVinci Resolve project, import all footage, and organize your media pool so editing is fast and deliberate — not a hunting expedition through unorganized clips.',
    why: 'A well-organized media pool reduces your total editing time by 35%. When every clip is labeled and in a logical bin, your brain stays in creative mode instead of file management mode.',
    steps: [
      '📁 Create project: `2026-W08_VideoTitle`',
      '⚙️ Set timeline: 1920×1080, 30fps, DaVinci YRGB Color Managed',
      '📥 Import folders: Talking Head, Screen Captures, Music, Graphics',
      '🗂️ Create Media Pool bins matching your folder structure',
      '🏷️ Rename clips in Resolve to match script scene numbers',
      '⭐ Mark your best takes with a star (Resolve rating system)',
    ],
    tips: [
      'Use Smart Bins to auto-filter by file type (video vs. audio)',
      'Set proxies for 4K footage on lower-powered machines',
      'Color-code bins: Red = problematic, Green = hero clips',
    ],
    tools: ['DaVinci Resolve 19 (free)', 'Minimum 16GB RAM for smooth playback'],
    maturityImpact: 'Editing & Post-Production → Level 3 Defined',
  },

  tue2: {
    dayId: 'tue', emoji: '📋',
    title: 'Clone DaVinci Resolve Master Template',
    fullLabel: 'Clone DaVinci Resolve master template',
    svgEmojis: ['📋','🔄','🎨','⚡'],
    brief: 'Duplicate your master Resolve template timeline into the new project — bringing pre-built intro, outro, lower thirds, color grades, and audio settings. Never start from zero.',
    why: 'A master template eliminates 90 minutes of repetitive setup per video. Every video starts with your brand locked in — same font, same color grade, same audio chain. Consistency builds brand recognition; templates enforce consistency.',
    steps: [
      '📂 Open your master template project in Resolve',
      '🔄 Export timeline as DRT: File → Export → Timeline',
      '📥 Import DRT into current project',
      '✅ Verify: intro clip, outro, lower-third template, color grade',
      '🎨 Update lower third text with current video title/date',
      '🔇 Verify audio bus routing matches your mic setup',
    ],
    tips: [
      'Keep a "VPMM Master Template" project always available',
      'Version your templates: `template_v1.drt`, `template_v2.drt`',
      'Add a "REPLACE ME" placeholder bin for new footage',
    ],
    tools: ['DaVinci Resolve', 'Master template project (.drp)'],
    maturityImpact: 'Editing & Post-Production → Level 4 Managed',
  },

  tue3: {
    dayId: 'tue', emoji: '🎵',
    title: 'Place Audio Track & Sync to Script',
    fullLabel: 'Place audio track and sync to script',
    svgEmojis: ['🎵','🎙️','📊','🔊'],
    brief: 'Lay down your primary audio track — the teleprompter narration — as the spine of your timeline. Everything else will be cut to sync with this audio.',
    why: 'Audio-first editing is 40% faster than video-first. When you have a clean audio track as your guide rail, all visual cuts become obvious — you\'re just illustrating the words. Bad audio sinks videos; great audio saves them.',
    steps: [
      '🎵 Place your best audio take on Track 1 (A1)',
      '✂️ Do a rough cut: remove all um\'s, long pauses (>0.5s), false starts',
      '📊 Check levels: aim for -12 to -6 dB average, no peaks above -1 dB',
      '🎙️ Apply noise reduction if background noise present (Fairlight)',
      '📝 Add markers at each script section using your timestamp notes',
      '🎶 Drop background music on Track 2 at -25 dB initially',
    ],
    tips: [
      'Use Fairlight\'s AI-powered Dialogue Isolate for noisy recordings',
      'Normalize all clips to -14 LUFS (YouTube standard) at the end',
      'A tiny room reverb (0.2s) makes mic audio sound less dry',
    ],
    tools: ['DaVinci Resolve Fairlight page', 'RX 10 (optional, for problem audio)'],
    maturityImpact: 'Editing & Post-Production → Level 3 Defined',
  },

  tue4: {
    dayId: 'tue', emoji: '🖼️',
    title: 'Place Screencaptures as A-Roll with Precise Timings',
    fullLabel: 'Place screencaptures as A-roll with precise timings',
    svgEmojis: ['🖼️','⏱️','🎬','🔗'],
    brief: 'Align your screen recording clips to the exact audio moments they illustrate. Every screencap should appear at the word it corresponds to — not before, not after.',
    why: 'Misaligned screencaps are visually jarring and erode trust. Viewers scan the screen for context before it appears — and that moment of confusion is where they scroll away. Precise timing keeps engagement high throughout the technical sections.',
    steps: [
      '🎯 Use your script\'s visual notes as a placement guide',
      '📌 Place screencap clips on V2 (above talking head on V1)',
      '⏱️ Sync to the exact word using the audio waveform as guide',
      '🔍 Zoom into timeline (Shift+Z) for frame-accurate placement',
      '📝 Trim 12-16 second max per screencap for pace',
      '🔄 Use Transform to zoom into specific code/UI areas',
    ],
    tips: [
      'Use Resolve\'s "Viewer Comparison" to check screen vs. audio alignment',
      'A 1-second pre-cut before the screencap appears feels natural',
      'Add a subtle zoom-in Ken Burns effect on static screenshots',
    ],
    tools: ['DaVinci Resolve Cut / Edit page', 'Script with visual notes'],
    maturityImpact: 'Editing & Post-Production → Level 4 Managed',
  },

  // ──────────────────────────────────────────────────────────
  // WEDNESDAY — Generate Code
  // ──────────────────────────────────────────────────────────
  wed1: {
    dayId: 'wed', emoji: '✂️',
    title: 'Break Merged Script Output into Scenes',
    fullLabel: 'Take merged script output and break into scenes',
    svgEmojis: ['✂️','📜','🗂️','🔢'],
    brief: 'Take the final edited script (now merged from your best takes) and systematically divide it into discrete scenes — each representing one concept, one visual, one Remotion animation.',
    why: 'Scene-based thinking is the bridge between writing and production. When each scene has a clear visual goal, code generation becomes mechanical rather than creative. This step turns a 10-minute script into 30-40 discrete production units.',
    steps: [
      '📝 Export the Resolve timeline as EDL or copy the edited script',
      '✂️ Mark scene boundaries: every time the visual or topic changes',
      '🔢 Number scenes: Scene 001, Scene 002 (zero-padded for sorting)',
      '📊 Create a scene table: ID | Duration | Visual Type | Remotion needed?',
      '🎯 Tag each scene: talking-head / screencap / animation / title-card',
      '📤 Export scene table as CSV for code generation input',
    ],
    tips: [
      'Aim for 12-16 seconds per scene — optimal for code generation',
      'Scenes that are just talking head don\'t need Remotion — skip them',
      'Use a spreadsheet: it becomes your production database',
    ],
    tools: ['Google Sheets / Excel', 'DaVinci Resolve (for EDL export)', 'Python (for CSV automation)'],
    maturityImpact: 'Editing & Post-Production → Level 4 Managed',
  },

  wed2: {
    dayId: 'wed', emoji: '🎭',
    title: 'Create Sentences & Inputs for Remotion Animation',
    fullLabel: 'Create sentences and inputs for Remotion animation',
    svgEmojis: ['🎭','📝','⚡','🎬'],
    brief: 'Write the exact text sentences and data inputs that will drive your Remotion code animations. Each scene that needs motion graphics gets a precisely crafted text input.',
    why: 'Remotion is a React-based video generation framework — it needs clean, structured inputs to generate consistent output. This step is the creative direction step for your AI-generated motion graphics pipeline.',
    steps: [
      '📊 Open your scene table from wed1',
      '🎭 For each animation scene, write: title, subtitle, code snippet, or diagram',
      '📝 Format inputs as JSON: { sceneId: "003", type: "code", content: "..." }',
      '✅ Validate: is each input 12-16 seconds of screen time?',
      '🎨 Add brand parameters: colors, fonts, logo positions',
      '📤 Save as `remotion_inputs.json`',
    ],
    tips: [
      'Keep code snippets under 15 lines for readable animations',
      'Use consistent variable naming across scenes for coherent visuals',
      'Test one scene through Remotion before processing all inputs',
    ],
    tools: ['VS Code / any editor', 'Remotion CLI', 'JSON validator (jsonlint.com)'],
    maturityImpact: 'Editing & Post-Production → Level 4 Managed',
  },

  wed3: {
    dayId: 'wed', emoji: '💻',
    title: 'Update Code to Generate DaVinci Deliverables for 16-Second Scenes',
    fullLabel: 'Update code to generate DaVinci Resolve deliverables for 16-second scenes',
    svgEmojis: ['💻','⚙️','🎞️','🤖'],
    brief: 'Update or run your code generation pipeline to produce Remotion-rendered video clips (MP4) for every animation scene — each exactly 16 seconds, ready to drop into DaVinci Resolve.',
    why: 'This is where the maturity level jumps from Level 3 to Level 4. Instead of manually creating each motion graphic, your code generates them all from the JSON inputs. One run produces all deliverables. This is the "managed" in Level 4 Managed.',
    steps: [
      '⚙️ Open your Remotion project in VS Code',
      '📥 Update `src/inputs.ts` with today\'s `remotion_inputs.json`',
      '▶️ Test render: `npx remotion render MyComp --duration 16s`',
      '✅ Verify output quality for Scene 001',
      '🚀 Bulk render all scenes: `npx remotion render --all`',
      '📁 Outputs land in `/renders/` — import to DaVinci Resolve',
    ],
    tips: [
      'Use Remotion Lambda for fast cloud rendering on large batches',
      'Commit your Remotion code after every successful bulk render',
      'Log render times — track improvement over weeks',
    ],
    tools: ['Node.js', 'Remotion CLI', 'VS Code', 'DaVinci Resolve (to receive renders)'],
    maturityImpact: 'Editing & Post-Production → Level 5 Optimized',
  },

  // ──────────────────────────────────────────────────────────
  // THURSDAY — AI Backgrounds & Animations
  // ──────────────────────────────────────────────────────────
  thu1: {
    dayId: 'thu', emoji: '🖌️',
    title: 'Use fal.ai & Remotion for Content Generation',
    fullLabel: 'Use fal.ai and Remotion for content generation',
    svgEmojis: ['🖌️','🤖','✨','🎨'],
    brief: 'Combine fal.ai\'s image/video generation with Remotion\'s animation framework to produce AI-generated background visuals, transitions, and dynamic overlays for your video.',
    why: 'AI-generated backgrounds replace stock footage costs ($0 vs. $50+/month) and create a unique visual style that makes your videos instantly recognizable. fal.ai + Remotion is the creative automation stack that separates Level 4 from Level 5 creators.',
    steps: [
      '🔑 Set `FAL_API_KEY` in your `.env` file',
      '🖼️ For each scene needing a background, write a descriptive prompt',
      '📡 Send to fal.ai: `flux-pro` model for high-quality stills',
      '📥 Download generated assets to `/assets/backgrounds/`',
      '🎬 Feed paths into Remotion `BackgroundComp` component',
      '🔄 Re-generate any that don\'t match the video\'s visual tone',
    ],
    tips: [
      'Use consistent prompt style across videos for brand coherence',
      'Save your best prompts in a "prompt library" markdown file',
      'fal.ai\'s `fast-sdxl` model is 10x faster for iteration',
    ],
    tools: ['fal.ai API', 'Remotion', 'Node.js', 'Prompt library (markdown)'],
    maturityImpact: 'Editing & Post-Production → Level 5 Optimized',
  },

  thu2: {
    dayId: 'thu', emoji: '🎬',
    title: 'Generate Script-Based Mini Edits for All Exported Footage',
    fullLabel: 'Generate script-based mini edits for all exported footage',
    svgEmojis: ['🎬','✨','🔄','⚡'],
    brief: 'Use your script structure to automatically generate short, tight edit sequences from all your exported footage. AI-assisted cut selection turns 3 hours of raw footage into a structured assembly cut.',
    why: 'Manual assembly editing is the biggest time sink in video production. Script-based mini edits use your pre-written timecodes and scene data to automate the rough cut — turning a 4-hour edit into a 45-minute refinement session.',
    steps: [
      '📊 Load your scene table (from wed1) and footage file list',
      '🤖 Run the assembly script: `python 5_Symbols/assembler.py`',
      '📋 Script outputs an EDL (Edit Decision List)',
      '📥 Import EDL into DaVinci Resolve',
      '👁️ Review each auto-generated cut',
      '✂️ Manual refinements only — no building from scratch',
    ],
    tips: [
      'The assembly script is in `5_Symbols/assembler.py` — extend it as you learn',
      'Even a rough auto-cut saves 2+ hours vs. manual assembly',
      'Log which scenes needed the most manual fixes — improve the script',
    ],
    tools: ['Python', 'DaVinci Resolve (EDL import)', '`5_Symbols/assembler.py`'],
    maturityImpact: 'Editing & Post-Production → Level 5 Optimized',
  },

  thu3: {
    dayId: 'thu', emoji: '🎞️',
    title: 'Create B-Roll Elements & Overlays Automatically',
    fullLabel: 'Create B-roll elements and overlays automatically',
    svgEmojis: ['🎞️','🖼️','🎨','⚙️'],
    brief: 'Automatically generate all supplementary visual elements — lower thirds, progress bars, callout boxes, and transition animations — using your Remotion components.',
    why: 'Manual lower thirds and callouts take 10+ minutes each in Resolve. Automated generation from your scene data takes 30 seconds per batch. This step is the visual consistency engine for your channel brand.',
    steps: [
      '📋 Review scene table for all "overlay" tagged scenes',
      '⚙️ Run: `npx remotion render OverlayComp --from-scene-table`',
      '📁 Outputs: lower thirds, section titles, callouts, progress bars',
      '✅ QA each overlay: check font, color, positioning',
      '📥 Import the batch into DaVinci Resolve media pool',
      '🎨 Place on V3 (above screencaps on V2, talking head on V1)',
    ],
    tips: [
      'Create a "brand token" JSON file for colors/fonts — used by all Remotion comps',
      'Animated lower thirds perform 15% better than static ones (viewer retention)',
      'Test overlays at 0.5x speed in Resolve before final export',
    ],
    tools: ['Remotion CLI', 'DaVinci Resolve (V3 overlay track)'],
    maturityImpact: 'Editing & Post-Production → Level 5 Optimized',
  },

  // ──────────────────────────────────────────────────────────
  // FRIDAY — Place Assets
  // ──────────────────────────────────────────────────────────
  fri1: {
    dayId: 'fri', emoji: '📂',
    title: 'Place Assets to Timeline by Sorting Filenames',
    fullLabel: 'Place assets to timeline by sorting filenames',
    svgEmojis: ['📂','🔤','📊','🎬'],
    brief: 'Import and place all Remotion-generated clips, AI backgrounds, and overlays into the DaVinci Resolve timeline by using filename-based sorting to maintain scene order automatically.',
    why: 'Filename sorting is the secret weapon of automated video production. When your files are named `scene_001.mp4`, `scene_002.mp4`, a single sort operation places them in perfect order. No manual drag-and-drop maze.',
    steps: [
      '📁 Verify all renders are in `/renders/` with zero-padded scene numbers',
      '📥 Import the entire `/renders/` folder into DaVinci Resolve',
      '🔤 Sort Media Pool by filename (ascending)',
      '🎬 Select all → Right-click → "Create Timeline Using Selected Clips"',
      '📊 Resolve creates a timeline in exact filename order',
      '✅ Verify scene count matches your scene table',
    ],
    tips: [
      'Always zero-pad: `scene_001` not `scene_1` (otherwise scene_10 sorts before scene_2)',
      'Add a `_REVIEW` suffix to any scene needing manual attention',
      'Color code clips in the timeline by type (red = needs work, green = approved)',
    ],
    tools: ['DaVinci Resolve', 'Finder/Explorer (to verify filenames)'],
    maturityImpact: 'Editing & Post-Production → Level 4 Managed',
  },

  fri2: {
    dayId: 'fri', emoji: '🎵',
    title: 'Normalize Audio Levels & Balance',
    fullLabel: 'Normalize audio levels and balance',
    svgEmojis: ['🎵','⚖️','🔊','📊'],
    brief: 'Process the assembled timeline\'s audio — normalize all dialogue to -14 LUFS, balance music under voice, and apply the final EQ and compression chain for broadcast-ready sound.',
    why: 'YouTube automatically adjusts loudness to -14 LUFS. If your video is louder, YouTube turns it down (and your music may now overpower your voice). If quieter, your video sounds amateurish next to others. Professional audio is non-negotiable for viewer retention.',
    steps: [
      '🎚️ Select all dialogue clips → Normalize to -14 LUFS (Fairlight)',
      '🎵 Set background music to -25 dB (voices should always be prominent)',
      '🎤 Apply dialogue chain: HPF 80Hz → EQ (presence boost at 2-3kHz) → Compressor (4:1) → Limiter (-1 dBFS)',
      '🔊 Check levels with Resolve\'s loudness meter (Fairlight → Meters)',
      '🎶 Duck music automatically under speech using Resolve\'s sidechain',
      '▶️ Full-playback check at normal listening volume',
    ],
    tips: [
      'Listen on earbuds AND laptop speakers — optimize for both',
      'Silence between cuts should be -60 dB, not -∞ (sounds natural)',
      'Export a proxy MP3 and listen on your phone commute as a reality check',
    ],
    tools: ['DaVinci Resolve Fairlight', 'Loudness meter', 'Headphones + laptop speaker'],
    maturityImpact: 'Editing & Post-Production → Level 4 Managed',
  },

  fri3: {
    dayId: 'fri', emoji: '📑',
    title: 'Add Chapter Markers & Subtitles',
    fullLabel: 'Add chapter markers and subtitles',
    svgEmojis: ['📑','💬','📍','🗣️'],
    brief: 'Add YouTube chapter markers to your timeline and generate accurate subtitles/captions. Chapters increase watch time by 23% by letting viewers navigate. Captions increase accessibility and SEO.',
    why: 'YouTube\'s algorithm uses caption text for search indexing. Accurate captions rank your video for keywords that aren\'t even in your title. Plus, 80% of viewers watch videos without sound in public — captions are how they engage.',
    steps: [
      '📍 Add Resolve markers at each chapter boundary (M key)',
      '📝 Name markers with your script\'s section titles',
      '🗣️ Use Resolve\'s transcription: Fairlight → Create Transcription',
      '✅ Review and correct auto-generated captions (95% accuracy usually)',
      '📤 Export captions as SRT file',
      '📋 Format chapters as YouTube timestamps: `0:00 Intro`, `2:30 Section 1`',
    ],
    tips: [
      'First chapter must be at 0:00 — YouTube requires it',
      'Minimum 3 chapters for YouTube to display the chapter bar',
      'Use Whisper CLI (free, offline) for faster/more accurate captions than Resolve',
    ],
    tools: ['DaVinci Resolve (markers + transcription)', 'Whisper CLI (optional)', 'SRT editor (Subtitle Edit)'],
    maturityImpact: 'Publishing & Distribution → Level 4 Managed',
  },

  // ──────────────────────────────────────────────────────────
  // SATURDAY — Publish
  // ──────────────────────────────────────────────────────────
  sat1: {
    dayId: 'sat', emoji: '📤',
    title: 'Export Final Video in All Formats',
    fullLabel: 'Export final video in all formats',
    svgEmojis: ['📤','🎥','⚙️','✅'],
    brief: 'Render and export the final video in all required formats — YouTube (1080p H.264), Shorts (9:16 crop), and LinkedIn — using DaVinci Resolve\'s Deliver page and saved presets.',
    why: 'Exporting without presets leads to inconsistent quality and wasted re-exports. A saved Deliver preset guarantees every export is identical: same bitrate, same codec, same colour profile. One master export → multiple formats in one Deliver queue.',
    steps: [
      '🎨 Do a final colour grade pass (adjust exposure, contrast, saturation)',
      '📤 Go to Deliver page in DaVinci Resolve',
      '⚙️ Load your "YouTube 1080p" preset',
      '📁 Set output path: `06_Export/2026-W08-VideoTitle/`',
      '➕ Add to render queue → also add "Shorts 9:16 crop" preset',
      '▶️ Render all — monitor progress',
    ],
    tips: [
      'H.264 16Mbps is the YouTube sweet spot — higher doesn\'t improve quality after upload compression',
      'Always watch the first 10 seconds of the export before uploading',
      'Keep the .drp project file archived — you\'ll need it for corrections',
    ],
    tools: ['DaVinci Resolve Deliver page', 'Export presets (.pst)', 'External SSD (for exports)'],
    maturityImpact: 'Publishing & Distribution → Level 4 Managed',
  },

  sat2: {
    dayId: 'sat', emoji: '📺',
    title: 'Upload to YouTube & Platforms',
    fullLabel: 'Upload to YouTube and platforms',
    svgEmojis: ['📺','☁️','⬆️','🌐'],
    brief: 'Upload the exported video to YouTube Studio, LinkedIn, and any other distribution channels — following a systematic upload checklist to ensure nothing is missed.',
    why: 'Uploading is not just clicking "Upload file." The first 48 hours after publication are critical for the YouTube algorithm. How you set up cards, end screens, playlists, and premiere scheduling directly impacts initial distribution.',
    steps: [
      '📺 YouTube Studio → Upload → Select 1080p MP4',
      '📝 Paste pre-written title, description (with timestamps), tags',
      '🖼️ Upload thumbnail (1280×720 JPG)',
      '📋 Add to relevant playlist',
      '🃏 Set end screens (subscribe + next video) at -20 seconds',
      '🔗 LinkedIn: upload natively (not YouTube link — native gets 5x reach)',
    ],
    tips: [
      'Upload as "Unlisted" first, then schedule to "Public" for optimal timing',
      'Best publish times: Tuesday/Thursday 9-11 AM in your audience\'s timezone',
      'Pin a comment immediately after publishing to guide early viewers',
    ],
    tools: ['YouTube Studio', 'LinkedIn Creator Mode', 'Buffer / Later (for scheduling)'],
    maturityImpact: 'Publishing & Distribution → Level 4 Managed',
  },

  sat3: {
    dayId: 'sat', emoji: '✍️',
    title: 'Write Title, Description & Tags',
    fullLabel: 'Write title, description, tags',
    svgEmojis: ['✍️','🏷️','🔍','📝'],
    brief: 'Craft a high-CTR title, a keyword-rich description with timestamps, and a comprehensive tag set — using vidIQ or TubeBuddy to validate search volume before publishing.',
    why: 'Your title and thumbnail drive 80% of a video\'s success. A 1% improvement in CTR compounds over thousands of impressions. This single task is the highest-ROI 30 minutes in the entire production sprint.',
    steps: [
      '🔍 Research 5 candidate keywords in vidIQ / TubeBuddy',
      '✍️ Write 3 title options using the formula: [Keyword] — [Benefit] in [Context]',
      '🏆 Pick the title with highest search volume + lowest competition',
      '📝 Write description: hook paragraph → timestamps → resources → socials',
      '🏷️ Add 15-20 tags: 5 exact match, 7 phrase match, 5 broad',
      '✅ Character check: title <70 chars, description >1000 chars',
    ],
    tips: [
      'Use the exact search query as your first tag',
      'Put the most important keyword in the first 3 words of the title',
      'Ask: "If this title was on a book cover, would I buy it?"',
    ],
    tools: ['vidIQ', 'TubeBuddy', 'Google Trends', 'YouTube auto-suggest'],
    maturityImpact: 'Thumbnail & SEO Optimization → Level 4 Managed',
  },

  sat4: {
    dayId: 'sat', emoji: '🖼️',
    title: 'Create & Upload Thumbnail',
    fullLabel: 'Create and upload thumbnail',
    svgEmojis: ['🖼️','🎨','⬆️','👁️'],
    brief: 'Design a high-CTR thumbnail using your Canva template — compelling face expression, bold 3-word text, high contrast — then upload to YouTube and set it as the video cover.',
    why: 'Your thumbnail is the most important 1280×720 pixels in your business. Studies show viewers decide whether to click in 0.4 seconds. A great thumbnail communicates the video\'s value instantly. A bad one makes even an amazing video invisible.',
    steps: [
      '📋 Open Canva thumbnail template (VPMM brand kit)',
      '😮 Update face photo — use highest-emotion expression from your shoot',
      '✍️ Write 3-word bold text (reflects the title\'s core promise)',
      '🎨 Adjust background colour for high contrast (test at 120px thumbnail size)',
      '📤 Export as JPG, max quality, <2MB',
      '⬆️ Upload to YouTube Studio → Thumbnail section',
    ],
    tips: [
      'Preview at 120px and 320px — must be readable at both sizes',
      'Avoid red/green elements on faces — it looks unnatural on small screens',
      'Schedule a TubeBuddy A/B test after 48h with a second thumbnail variant',
    ],
    tools: ['Canva (Pro or free)', 'VPMM Thumbnail Template', 'TubeBuddy A/B testing'],
    maturityImpact: 'Thumbnail & SEO Optimization → Level 4 Managed',
  },

  sat5: {
    dayId: 'sat', emoji: '📅',
    title: 'Schedule Post & Promote',
    fullLabel: 'Schedule post and promote',
    svgEmojis: ['📅','📣','🔗','🚀'],
    brief: 'Schedule the video to go public at the optimal time, then execute a systematic promotion plan across LinkedIn, GitHub, and community channels to maximise early view velocity.',
    why: 'Early view velocity is the #1 signal the YouTube algorithm uses to decide whether to push a video into recommendations. Promotion that drives views and engagement in the first 24-48 hours can 10x a video\'s long-term reach.',
    steps: [
      '⏰ Schedule YouTube video for optimal publish time (Tue/Thu 9-11 AM)',
      '💼 Draft LinkedIn post: hook sentence + 3 value bullets + video link',
      '🐙 Add video link to relevant GitHub README files',
      '📧 If newsletter: include in next edition',
      '💬 Engage with every comment within the first 2 hours of going live',
      '📊 Log: publish time, thumbnail, title → for analytics comparison next week',
    ],
    tips: [
      'Post on LinkedIn 2 hours BEFORE the video goes public — builds anticipation',
      'Reply to comments with a question to encourage thread activity',
      'Pin your own comment: "Time stamps: 00:00 ..."',
    ],
    tools: ['LinkedIn Creator Mode', 'YouTube Studio (scheduling)', 'GitHub', 'Buffer (optional)'],
    maturityImpact: 'Publishing & Distribution → Level 4 Managed',
  },
};

// Task file name mapping
const TASK_FILES = {
  sun1: 'sun1_BrainstormTopicAndCoreThesisStatementOnPenAndPaper.html',
  sun2: 'sun2_GiveHandwrittenNotesToMobileGPTToRewriteAsProfessionalScript.html',
  sun3: 'sun3_OutlineVideoStructureIntroBodyConclusion.html',
  sun4: 'sun4_WriteFullScriptWithTimestampsAndVisualsNotes.html',
  mon1: 'mon1_WakeUpAt5AMAndPrepareForShooting.html',
  mon2: 'mon2_LoadScriptIntoElgatoPrompterForTeleprompter.html',
  mon3: 'mon3_ShootTalkingHeadFootageWithPostProductionPlanInMind.html',
  mon4: 'mon4_CaptureScreenRecordingsForDemos.html',
  mon5: 'mon5_UploadRawFootageToGoogleDrive.html',
  mon6: 'mon6_CreateObsidianNotesForTheSession.html',
  tue1: 'tue1_ImportFootageIntoDaVinciResolve.html',
  tue2: 'tue2_CloneDaVinciResolveMasterTemplate.html',
  tue3: 'tue3_PlaceAudioTrackAndSyncToScript.html',
  tue4: 'tue4_PlaceScreencapturesAsARollWithPreciseTimings.html',
  wed1: 'wed1_TakeMergedScriptOutputAndBreakIntoScenes.html',
  wed2: 'wed2_CreateSentencesAndInputsForRemotionAnimation.html',
  wed3: 'wed3_UpdateCodeToGenerateDaVinciResolveDeliverablesFor16SecondScenes.html',
  thu1: 'thu1_UseFalAiAndRemotionForContentGeneration.html',
  thu2: 'thu2_GenerateScriptBasedMiniEditsForAllExportedFootage.html',
  thu3: 'thu3_CreateBRollElementsAndOverlaysAutomatically.html',
  fri1: 'fri1_PlaceAssetsToTimelineBySortingFilenames.html',
  fri2: 'fri2_NormalizeAudioLevelsAndBalance.html',
  fri3: 'fri3_AddChapterMarkersAndSubtitles.html',
  sat1: 'sat1_ExportFinalVideoInAllFormats.html',
  sat2: 'sat2_UploadToYouTubeAndPlatforms.html',
  sat3: 'sat3_WriteTitleDescriptionTags.html',
  sat4: 'sat4_CreateAndUploadThumbnail.html',
  sat5: 'sat5_SchedulePostAndPromote.html',
};

const DAY_TASK_LIST = {
  sun: ['sun1','sun2','sun3','sun4'],
  mon: ['mon1','mon2','mon3','mon4','mon5','mon6'],
  tue: ['tue1','tue2','tue3','tue4'],
  wed: ['wed1','wed2','wed3'],
  thu: ['thu1','thu2','thu3'],
  fri: ['fri1','fri2','fri3'],
  sat: ['sat1','sat2','sat3','sat4','sat5'],
};

// ── MAIN RENDER FUNCTION ──
function renderTaskPage(taskId) {
  const task = ALL_TASKS[taskId];
  if (!task) { document.body.innerHTML = '<p>Task not found: ' + taskId + '</p>'; return; }
  const day = DAY_META[task.dayId];
  const dayTasks = DAY_TASK_LIST[task.dayId];
  const taskIdx = dayTasks.indexOf(taskId);
  const prevTask = taskIdx > 0 ? dayTasks[taskIdx - 1] : null;
  const nextTask = taskIdx < dayTasks.length - 1 ? dayTasks[taskIdx + 1] : null;

  // Prev day / next day
  const dayIdx = DAY_ORDER.indexOf(task.dayId);
  const prevDay = dayIdx > 0 ? DAY_ORDER[dayIdx - 1] : null;
  const nextDay = dayIdx < DAY_ORDER.length - 1 ? DAY_ORDER[dayIdx + 1] : null;

  document.title = `📅 ${day.name} — ${task.title}`;

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = getCSS(day.color);
  document.head.appendChild(style);

  // Build SVG hero
  const svgHero = buildSVG(task, day);

  // Build day task nav
  const dayTaskNav = dayTasks.map((tid, i) => {
    const t = ALL_TASKS[tid];
    const isActive = tid === taskId;
    return `<a href="${TASK_FILES[tid]}" class="day-task-link${isActive ? ' active' : ''}" title="${t.fullLabel}">
      <span class="dtl-num">${i+1}</span>
      <span class="dtl-emoji">${t.emoji}</span>
      <span class="dtl-title">${t.title}</span>
    </a>`;
  }).join('');

  // Build week nav
  const weekNav = DAY_ORDER.map(d => {
    const dm = DAY_META[d];
    const firstTask = DAY_TASK_LIST[d][0];
    const isActive = d === task.dayId;
    return `<a href="${TASK_FILES[firstTask]}" class="week-day-link${isActive ? ' active' : ''}">${dm.name}</a>`;
  }).join('');

  // Steps HTML
  const stepsHTML = task.steps.map(s => `<li>${s}</li>`).join('');
  const tipsHTML = task.tips.map(t => `<li>${t}</li>`).join('');
  const toolsHTML = task.tools.map(t => `<li>🔧 ${t}</li>`).join('');

  document.body.innerHTML = `
    <!-- TOP NAV (debug) -->
    <nav id="top-nav">
      <div class="nav-brand">🎬 VPMM</div>
      <div class="nav-links">
        <a href="../../index.html">🏠 Home</a>
        <a href="../maturity_matrix.html">📊 Maturity Matrix</a>
        <a href="../../aigent.md">🤖 Agent Rules</a>
        <a href="../../kilocode.md">💻 KiloCode Rules</a>
        <a href="../../markdown_renderer.html">📝 Markdown Renderer</a>
        <a href="../../1_Real_Unknown/">1_Real</a>
        <a href="../../2_Environment/">2_Environment</a>
        <a href="../../3_Simulation/">3_Simulation</a>
        <a href="../../4_Formula/">4_Formula</a>
        <a href="../" class="active">5_Symbols</a>
        <a href="../../6_Semblance/">6_Semblance</a>
        <a href="../../7_Testing_Known/">7_Testing</a>
      </div>
    </nav>
    <button id="debug-btn" onclick="toggleDebug()">⚙️ Debug</button>

    <!-- WEEK NAV BAR -->
    <div class="week-nav">
      <div class="week-nav-inner">
        <a href="../weekly_schedule.html" class="back-link">← Sprint</a>
        ${weekNav}
      </div>
    </div>

    <!-- DAY TASK SIDEBAR + CONTENT -->
    <div class="page-layout">
      <aside class="task-sidebar">
        <div class="sidebar-day-label" style="background:${day.color};color:#000">${task.emoji} ${day.name}</div>
        <div class="sidebar-day-theme">${day.theme}</div>
        ${dayTaskNav}
      </aside>

      <main class="task-content">
        <!-- SVG HERO IMAGE -->
        <div class="hero-img-wrap">
          ${svgHero}
        </div>

        <!-- TASK HEADER -->
        <div class="task-header">
          <div class="task-badge" style="background:${day.color}22;border-color:${day.color};color:${day.color}">
            ${day.name} · Task ${taskIdx + 1} of ${dayTasks.length}
          </div>
          <h1>${task.emoji} ${task.title}</h1>
          <p class="task-full-label">${task.fullLabel}</p>
        </div>

        <!-- BRIEF -->
        <section class="content-section">
          <h2>📌 Overview</h2>
          <p>${task.brief}</p>
        </section>

        <!-- WHY -->
        <section class="content-section">
          <h2>💡 Why This Matters</h2>
          <p>${task.why}</p>
        </section>

        <!-- HOW TO -->
        <section class="content-section">
          <h2>🛠 Step-by-Step</h2>
          <ol class="steps-list">${stepsHTML}</ol>
        </section>

        <!-- TIPS -->
        <section class="content-section">
          <h2>✨ Pro Tips</h2>
          <ul class="tips-list">${tipsHTML}</ul>
        </section>

        <!-- TOOLS -->
        <section class="content-section tools-section">
          <h2>🔧 Tools Required</h2>
          <ul class="tools-list">${toolsHTML}</ul>
        </section>

        <!-- MATURITY IMPACT -->
        <div class="maturity-badge">
          📊 Maturity Impact: <strong>${task.maturityImpact}</strong>
        </div>

        <!-- PREV / NEXT -->
        <div class="prev-next">
          ${prevTask
            ? `<a href="${TASK_FILES[prevTask]}" class="pn-btn pn-prev">← ${ALL_TASKS[prevTask].emoji} ${ALL_TASKS[prevTask].title}</a>`
            : prevDay
              ? `<a href="${TASK_FILES[DAY_TASK_LIST[prevDay][DAY_TASK_LIST[prevDay].length-1]]}" class="pn-btn pn-prev">← ${DAY_META[prevDay].name} (last task)</a>`
              : `<span></span>`}
          <a href="../weekly_schedule.html" class="pn-btn pn-week">📅 Sprint</a>
          ${nextTask
            ? `<a href="${TASK_FILES[nextTask]}" class="pn-btn pn-next">${ALL_TASKS[nextTask].emoji} ${ALL_TASKS[nextTask].title} →</a>`
            : nextDay
              ? `<a href="${TASK_FILES[DAY_TASK_LIST[nextDay][0]]}" class="pn-btn pn-next">${DAY_META[nextDay].name} (first task) →</a>`
              : `<span></span>`}
        </div>
      </main>
    </div>

    <footer>
      <p>🎬 Video Production Maturity Matrix &nbsp;|&nbsp;
        <a href="../../index.html">Home</a> ·
        <a href="../weekly_schedule.html">Sprint</a> ·
        <a href="https://www.linkedin.com/in/rifaterdemsahin/" target="_blank">LinkedIn</a> ·
        <a href="https://www.youtube.com/@RifatErdemSahin" target="_blank">YouTube</a>
      </p>
    </footer>
  `;

  // Reapply debug state after innerHTML replacement
  applyDebugState();
}

function buildSVG(task, day) {
  const [c1, c2] = day.grad;
  const emojis = task.svgEmojis || ['🎬','✨'];
  const em = emojis.slice(0,4);
  return `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
    <defs>
      <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${c1};stop-opacity:0.25"/>
        <stop offset="100%" style="stop-color:${c2};stop-opacity:0.15"/>
      </linearGradient>
      <radialGradient id="rg" cx="50%" cy="50%" r="60%">
        <stop offset="0%" style="stop-color:${c1};stop-opacity:0.2"/>
        <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
      </radialGradient>
    </defs>
    <!-- Background -->
    <rect width="800" height="240" fill="#1a1a2e"/>
    <rect width="800" height="240" fill="url(#hg)"/>
    <ellipse cx="400" cy="120" rx="300" ry="120" fill="url(#rg)"/>
    <!-- Grid lines -->
    ${Array.from({length:9},(_,i)=>`<line x1="${i*100}" y1="0" x2="${i*100}" y2="240" stroke="${c1}" stroke-opacity="0.07" stroke-width="1"/>`).join('')}
    ${Array.from({length:4},(_,i)=>`<line x1="0" y1="${i*80}" x2="800" y2="${i*80}" stroke="${c1}" stroke-opacity="0.07" stroke-width="1"/>`).join('')}
    <!-- Accent circles -->
    <circle cx="80" cy="120" r="60" fill="${c1}" fill-opacity="0.08"/>
    <circle cx="720" cy="120" r="60" fill="${c2}" fill-opacity="0.08"/>
    <!-- Main emojis -->
    <text x="180" y="145" font-size="72" text-anchor="middle" opacity="0.9">${em[0]||'🎬'}</text>
    <text x="340" y="145" font-size="72" text-anchor="middle" opacity="0.7">${em[1]||'✨'}</text>
    <text x="500" y="145" font-size="72" text-anchor="middle" opacity="0.9">${em[2]||'🚀'}</text>
    <text x="650" y="145" font-size="72" text-anchor="middle" opacity="0.7">${em[3]||'💡'}</text>
    <!-- Day badge -->
    <rect x="20" y="16" width="140" height="32" rx="16" fill="${c1}" fill-opacity="0.3" stroke="${c1}" stroke-opacity="0.6" stroke-width="1"/>
    <text x="90" y="37" font-size="13" fill="${c1}" text-anchor="middle" font-family="system-ui" font-weight="600">${day.name} · ${day.theme.substring(0,12)}…</text>
    <!-- Bottom accent bar -->
    <rect x="0" y="232" width="800" height="8" fill="url(#hg)" opacity="0.5"/>
  </svg>`;
}

function getCSS(accentColor) {
  return `
    :root {
      --bg:#0f0f0f;--surface:#1a1a2e;--surface2:#16213e;
      --accent:${accentColor};--text:#e0e0e0;--text-muted:#888;
      --nav-h:60px;--radius:10px;--shadow:0 4px 24px rgba(0,0,0,0.4);
      --font:'Segoe UI',system-ui,-apple-system,sans-serif;
      --font-mono:'Fira Code','Cascadia Code',Consolas,monospace;
    }
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:var(--font);background:var(--bg);color:var(--text);min-height:100vh;}

    /* TOP NAV */
    #top-nav{display:none;position:fixed;top:0;left:0;right:0;height:var(--nav-h);
      background:rgba(26,26,46,0.97);backdrop-filter:blur(10px);
      border-bottom:1px solid ${accentColor}44;z-index:1000;
      align-items:center;padding:0 16px;gap:6px;}
    #top-nav.visible{display:flex;}
    .nav-brand{font-size:.9rem;font-weight:700;color:var(--accent);white-space:nowrap;flex-shrink:0;}
    .nav-links{display:flex;gap:4px;flex-wrap:wrap;align-items:center;flex:1;}
    .nav-links a{color:#888;text-decoration:none;font-size:.72rem;padding:4px 8px;border-radius:6px;transition:all .2s;white-space:nowrap;}
    .nav-links a:hover,.nav-links a.active{color:var(--text);background:${accentColor}22;}

    /* DEBUG BTN */
    #debug-btn{position:fixed;bottom:20px;right:20px;background:${accentColor}22;
      border:1px solid var(--accent);color:var(--accent);border-radius:50px;
      padding:8px 16px;font-size:.75rem;cursor:pointer;z-index:2000;transition:all .2s;}
    #debug-btn:hover{background:var(--accent);color:#fff;}

    /* WEEK NAV */
    .week-nav{background:var(--surface);border-bottom:1px solid rgba(255,255,255,0.07);
      padding:0;position:sticky;top:0;z-index:900;}
    .week-nav-inner{display:flex;align-items:stretch;max-width:1300px;margin:0 auto;overflow-x:auto;}
    .back-link{padding:12px 16px;color:#888;text-decoration:none;font-size:.8rem;
      border-right:1px solid rgba(255,255,255,0.07);white-space:nowrap;display:flex;align-items:center;}
    .back-link:hover{color:var(--text);background:${accentColor}11;}
    .week-day-link{padding:12px 14px;color:#888;text-decoration:none;font-size:.78rem;
      border-right:1px solid rgba(255,255,255,0.05);white-space:nowrap;transition:all .2s;display:flex;align-items:center;}
    .week-day-link:hover{color:var(--text);background:${accentColor}11;}
    .week-day-link.active{color:var(--accent);background:${accentColor}18;font-weight:700;
      border-bottom:2px solid var(--accent);}

    /* PAGE LAYOUT */
    .page-layout{display:flex;max-width:1300px;margin:0 auto;min-height:calc(100vh - 120px);}

    /* SIDEBAR */
    .task-sidebar{width:260px;flex-shrink:0;background:var(--surface);
      border-right:1px solid rgba(255,255,255,0.07);padding:0;
      position:sticky;top:49px;height:calc(100vh - 49px);overflow-y:auto;}
    .sidebar-day-label{padding:14px 16px;font-weight:700;font-size:.9rem;}
    .sidebar-day-theme{padding:8px 16px 12px;color:#888;font-size:.75rem;
      border-bottom:1px solid rgba(255,255,255,0.07);}
    .day-task-link{display:flex;align-items:center;gap:10px;padding:12px 16px;
      text-decoration:none;color:#888;transition:all .2s;
      border-bottom:1px solid rgba(255,255,255,0.04);}
    .day-task-link:hover{color:var(--text);background:${accentColor}11;}
    .day-task-link.active{color:var(--accent);background:${accentColor}18;
      border-left:3px solid var(--accent);}
    .dtl-num{font-size:.7rem;background:rgba(255,255,255,0.1);padding:2px 6px;
      border-radius:10px;flex-shrink:0;}
    .day-task-link.active .dtl-num{background:var(--accent);color:#fff;}
    .dtl-emoji{font-size:1.1rem;flex-shrink:0;}
    .dtl-title{font-size:.78rem;line-height:1.3;}

    /* MAIN CONTENT */
    .task-content{flex:1;min-width:0;padding:0 0 60px;}

    /* HERO SVG */
    .hero-img-wrap{width:100%;overflow:hidden;}
    .hero-svg{width:100%;height:auto;display:block;max-height:240px;object-fit:cover;}

    /* TASK HEADER */
    .task-header{padding:32px 40px 24px;}
    .task-badge{display:inline-block;padding:4px 14px;border-radius:20px;
      font-size:.72rem;font-weight:600;border:1px solid;margin-bottom:12px;
      text-transform:uppercase;letter-spacing:.5px;}
    .task-header h1{font-size:clamp(1.4rem,3vw,2.2rem);font-weight:800;
      line-height:1.2;margin-bottom:8px;}
    .task-full-label{color:#888;font-size:.88rem;font-style:italic;}

    /* CONTENT SECTIONS */
    .content-section{padding:0 40px 28px;}
    .content-section h2{font-size:1.1rem;font-weight:700;margin-bottom:14px;
      color:var(--accent);display:flex;align-items:center;gap:8px;}
    .content-section p{color:#ccc;line-height:1.8;font-size:.95rem;}

    /* STEPS */
    .steps-list{list-style:none;counter-reset:steps;}
    .steps-list li{counter-increment:steps;display:flex;gap:12px;align-items:flex-start;
      padding:12px 16px;margin-bottom:8px;background:var(--surface);
      border-radius:8px;border-left:3px solid var(--accent);font-size:.9rem;
      color:#ddd;line-height:1.5;}
    .steps-list li::before{content:counter(steps);background:var(--accent);
      color:#000;width:22px;height:22px;border-radius:50%;display:flex;
      align-items:center;justify-content:center;font-size:.7rem;font-weight:700;
      flex-shrink:0;margin-top:1px;}

    /* TIPS */
    .tips-list{list-style:none;}
    .tips-list li{padding:10px 14px;margin-bottom:6px;background:${accentColor}0d;
      border-radius:8px;font-size:.88rem;color:#ccc;line-height:1.5;
      border-left:2px solid ${accentColor}66;}

    /* TOOLS */
    .tools-section{background:var(--surface);border-radius:var(--radius);
      margin:0 40px 28px;padding:20px 24px!important;}
    .tools-list{list-style:none;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;}
    .tools-list li{padding:8px 12px;background:var(--surface2);border-radius:6px;
      font-size:.84rem;color:#bbb;}

    /* MATURITY BADGE */
    .maturity-badge{margin:0 40px 28px;padding:14px 20px;
      background:${accentColor}11;border:1px solid ${accentColor}44;
      border-radius:var(--radius);font-size:.88rem;color:#ccc;}
    .maturity-badge strong{color:var(--accent);}

    /* PREV / NEXT */
    .prev-next{display:flex;gap:12px;align-items:center;justify-content:space-between;
      padding:24px 40px;border-top:1px solid rgba(255,255,255,0.07);flex-wrap:wrap;}
    .pn-btn{display:inline-flex;align-items:center;padding:10px 18px;
      border-radius:8px;text-decoration:none;font-size:.82rem;
      transition:all .2s;border:1px solid rgba(255,255,255,0.1);color:#ccc;}
    .pn-btn:hover{border-color:var(--accent);color:var(--accent);}
    .pn-week{background:var(--accent);color:#fff!important;border-color:var(--accent)!important;font-weight:600;}
    .pn-prev{justify-content:flex-start;}
    .pn-next{justify-content:flex-end;}

    /* FOOTER */
    footer{text-align:center;padding:30px 20px;border-top:1px solid rgba(255,255,255,0.07);
      color:#888;font-size:.8rem;}
    footer a{color:var(--accent);text-decoration:none;}

    @media(max-width:768px){
      .task-sidebar{display:none;}
      .task-header,.content-section{padding-left:20px;padding-right:20px;}
      .tools-section{margin-left:20px;margin-right:20px;}
      .maturity-badge{margin-left:20px;margin-right:20px;}
      .prev-next{padding:20px;}
    }
  `;
}

// ── DEBUG ──
function getDebugState(){return document.cookie.split(';').some(c=>c.trim().startsWith('debug=true'));}
function setDebugCookie(v){document.cookie=`debug=${v};path=/;max-age=${60*60*24*30}`;}
function applyDebugState(){
  const nav=document.getElementById('top-nav');
  const btn=document.getElementById('debug-btn');
  if(!nav||!btn)return;
  if(getDebugState()){nav.classList.add('visible');btn.textContent='⚙️ Hide Nav';}
  else{nav.classList.remove('visible');btn.textContent='⚙️ Debug';}
}
function toggleDebug(){setDebugCookie(!getDebugState());applyDebugState();}
