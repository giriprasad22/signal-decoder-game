# 🎮 HOW TO PLAY: Signal Decoder Game

## ⚠️ IMPORTANT: Make sure the game is running!

### Check if the server is running:
1. Look at your terminal/PowerShell
2. You should see: `Local: http://localhost:5173/`
3. If not, run: `npm run dev` in the project folder

---

## 🌐 STEP 1: Open the Game in Browser

**Option A: Manual (Recommended)**
1. Open **Google Chrome** or **Firefox** (or any modern browser)
2. Type in the address bar: `http://localhost:5173/`
3. Press Enter

**Option B: VS Code Browser**
- The game may be open in VS Code's Simple Browser tab
- Look for a tab with the game title

---

## 🎯 STEP 2: Understanding the Game Screen

When the game loads, you'll see:

```
┌─────────────────────────────────────┐
│  🔍 Signal Decoder                  │
│  The Invisible Pattern Game         │
├─────────────────────────────────────┤
│  Level 1: Even Indices              │
│  Progress: 1 / 5                    │
│  Score: 0                           │
├─────────────────────────────────────┤
│  🔄 Watch the pattern carefully...  │
├─────────────────────────────────────┤
│  ┌─────────────────────┐            │
│  │ [ ] [ ] [ ] [ ] [ ] │            │
│  │ [ ] [ ] [ ] [ ] [ ] │            │
│  │ [ ] [ ] [ ] [ ] [ ] │  ← 5x5 GRID│
│  │ [ ] [ ] [ ] [ ] [ ] │            │
│  │ [ ] [ ] [ ] [ ] [ ] │            │
│  └─────────────────────┘            │
└─────────────────────────────────────┘
```

---

## 🎬 STEP 3: Watch the Flashing Demo

### What happens:
1. **IMMEDIATELY** when the level starts, some squares will flash **YELLOW/GOLD**
2. They will **turn ON and OFF** repeatedly (like blinking lights)
3. This continues for **10 seconds**
4. The message says: **"🔄 Watch the pattern carefully..."**

### What to do:
- 👁️ **WATCH CLOSELY!** Don't look away!
- 🧠 **MEMORIZE** which squares are flashing
- 📝 **COUNT** how many squares flash (helps verify later)
- 🔍 **LOOK FOR PATTERNS** (corners? lines? center? edges?)

### Example - Level 1 (Even Indices):
```
Squares that FLASH (yellow):
┌─────────────────────┐
│ [🟡] [ ] [🟡] [ ] [🟡] │  ← 0, 2, 4
│ [🟡] [ ] [🟡] [ ] [🟡] │  ← 5, 7, 9
│ [🟡] [ ] [🟡] [ ] [🟡] │  ← 10, 12, 14
│ [🟡] [ ] [🟡] [ ] [🟡] │  ← 15, 17, 19
│ [🟡] [ ] [🟡] [ ] [🟡] │  ← 20, 22, 24
└─────────────────────┘
Total: 13 squares flash (positions 0,2,4,6,8,10,12,14,16,18,20,22,24)
```

---

## ✋ STEP 4: Select the Squares

### After 10 seconds:
1. The flashing **STOPS**
2. All squares turn **DARK GRAY** again
3. Message changes to: **"👆 Click the cells that were flashing"**
4. You can now **CLICK** on squares!

### How to select:
- **CLICK** a square → It turns **BLUE** (selected)
- **CLICK AGAIN** → It turns gray again (deselected)
- You can change your mind as many times as you want
- **NO TIME LIMIT** during selection

### Example selection:
```
Your selections (blue):
┌─────────────────────┐
│ [🔵] [ ] [🔵] [ ] [🔵] │
│ [🔵] [ ] [🔵] [ ] [🔵] │
│ [🔵] [ ] [🔵] [ ] [🔵] │
│ [🔵] [ ] [🔵] [ ] [🔵] │
│ [🔵] [ ] [🔵] [ ] [🔵] │
└─────────────────────┘
```

---

## 📤 STEP 5: Submit Your Answer

1. When you're confident, click the **"Submit Answer"** button
2. The game will check your selections

---

## 📊 STEP 6: See the Results

### Perfect Match ✅
```
All correct! 
┌─────────────────────┐
│ [✅] [ ] [✅] [ ] [✅] │  ← Green with ✓
│ [✅] [ ] [✅] [ ] [✅] │
│ [✅] [ ] [✅] [ ] [✅] │
│ [✅] [ ] [✅] [ ] [✅] │
│ [✅] [ ] [✅] [ ] [✅] │
└─────────────────────┘
✅ Perfect! Moving to next level...
```

### Mistakes ❌
```
┌─────────────────────┐
│ [✅] [❌] [✅] [ ] [✅] │  ← Green = Correct
│ [✅] [ ] [✅] [ ] [✅] │  ← Red = Wrong pick
│ [✅] [ ] [✅] [ ] [✅] │  ← Empty = You missed it
│ [✅] [ ] [✅] [ ] [✅] │
│ [✅] [ ] [✅] [ ] [✅] │
└─────────────────────┘
❌ Not quite right. Try again!
```

**Buttons appear:**
- **Replay Demo** - Watch the pattern again
- **Show Hint** - Get a clue about the rule
- **Next Level** - Skip to next level

---

## 🧩 THE 5 LEVELS EXPLAINED

### Level 1: Even Indices ⭐
**Pattern:** Every OTHER square flashes (positions 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24)
**Count:** 13 squares
**Hint:** "Flash squares at even index positions"

### Level 2: Diagonals ⭐⭐
**Pattern:** Both diagonal lines flash
```
[🟡] [ ] [ ] [ ] [🟡]
[ ] [🟡] [ ] [🟡] [ ]
[ ] [ ] [🟡] [ ] [ ]
[ ] [🟡] [ ] [🟡] [ ]
[🟡] [ ] [ ] [ ] [🟡]
```
**Count:** 9 squares
**Hint:** "Flash squares on both main diagonals"

### Level 3: Prime Numbers ⭐⭐⭐
**Pattern:** Positions that are prime numbers (2, 3, 5, 7, 11, 13, 17, 19, 23)
**Count:** 9 squares
**Hint:** "Flash squares at prime index positions"

### Level 4: Center Cluster ⭐⭐
**Pattern:** Center square + 4 neighbors (up, down, left, right)
```
[ ] [ ] [ ] [ ] [ ]
[ ] [ ] [🟡] [ ] [ ]
[ ] [🟡] [🟡] [🟡] [ ]
[ ] [ ] [🟡] [ ] [ ]
[ ] [ ] [ ] [ ] [ ]
```
**Count:** 5 squares
**Hint:** "Flash the center and its 4 direct neighbors"

### Level 5: Modulo Pattern ⭐⭐⭐⭐
**Pattern:** Squares where (row + column) is divisible by 3
**Count:** 9 squares
**Hint:** "Flash squares where (row + col) is divisible by 3"

---

## 💯 SCORING SYSTEM

- **+10 points** for each CORRECT square
- **-5 points** for each WRONG square
- **0 points** for missed squares (you didn't select them)

**Example:**
- You selected 13 squares
- 12 were correct (+120 points)
- 1 was wrong (-5 points)
- **Total: +115 points**

---

## 🐛 TROUBLESHOOTING

### Problem: "I don't see any flashing!"

**Solution 1:** Restart the dev server
```powershell
# Press Ctrl+C in the terminal to stop
# Then run again:
npm run dev
```

**Solution 2:** Hard refresh the browser
- Press `Ctrl + Shift + R` (Windows)
- Or `Cmd + Shift + R` (Mac)

**Solution 3:** Check browser console
- Press `F12` to open developer tools
- Look for red errors in the Console tab
- Share errors with me if you see any

### Problem: "Nothing happens when I click squares!"

**Reason:** You're still in "demo" mode!
- Wait for the 10-second demo to finish
- The message will change to "👆 Click the cells..."
- Then you can click

### Problem: "The squares flash too fast!"

**Solution:** This is intentional! The game is testing your memory.
- Watch more carefully
- Use the "Replay Demo" button after submitting
- Look for the pattern (not just random flashing)

### Problem: "I can't find the 'Submit Answer' button!"

**Reason:** You haven't selected any squares yet!
- The button is disabled (grayed out) until you click at least one square
- Click some squares first, then the button will become clickable

---

## 🎯 TIPS FOR SUCCESS

1. **Count the flashes** - Helps you know when you're done selecting
2. **Look for patterns** - Not random! There's always a rule
3. **Focus on position** - Where is it? Corner? Center? Edge?
4. **Use replay** - No shame in watching multiple times!
5. **Read hints** - They explain the exact rule

---

## ✅ VERIFICATION CHECKLIST

Before asking for help, check:

- [ ] Terminal shows: `Local: http://localhost:5173/`
- [ ] Browser is at: `http://localhost:5173/`
- [ ] Page shows: "🔍 Signal Decoder" title
- [ ] You see a 5x5 grid (25 squares)
- [ ] You see: "Level 1: Even Indices"
- [ ] Squares are flashing yellow/gold
- [ ] After 10 seconds, message says "👆 Click the cells..."

If ALL above are true → Game is working! Just follow the steps above.

If ANY are false → Tell me which step failed!

---

## 🎮 Ready to Play?

1. Open `http://localhost:5173/` in browser
2. Watch the flashing (10 seconds)
3. Click the squares you remember
4. Submit and see results!

**Good luck! 🍀**
