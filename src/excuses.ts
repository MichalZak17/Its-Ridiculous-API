export interface Excuse {
  id: number
  excuse: string
  ridiculous_rating: number
  category: Category
  will_work: boolean
  teacher_reaction: string
}

export const CATEGORIES = [
  'pets', 'tech', 'family', 'weather', 'existential',
  'health', 'time', 'supernatural', 'school', 'creative',
] as const

export type Category = (typeof CATEGORIES)[number]

export const excuses: Excuse[] = [
  // === Pets ===
  { id: 1, excuse: "My dog ate my homework. Then he ate the backup copy. Then he ate the USB drive. He's basically a shredder with legs.", ridiculous_rating: 9, category: 'pets', will_work: false, teacher_reaction: "You don't have a dog, Marcus." },
  { id: 2, excuse: "My cat walked across my keyboard and somehow deleted the entire file. She also ordered three items from Amazon.", ridiculous_rating: 5, category: 'pets', will_work: true, teacher_reaction: "What did she order?" },
  { id: 3, excuse: "My hamster used my essay as bedding material. He seemed really comfortable so I didn't have the heart to take it back.", ridiculous_rating: 7, category: 'pets', will_work: false, teacher_reaction: "Your hamster's comfort is not a valid academic excuse." },
  { id: 4, excuse: "My parrot memorized my entire essay and now refuses to stop reciting it. I technically submitted it — orally — to everyone within earshot.", ridiculous_rating: 8, category: 'pets', will_work: false, teacher_reaction: "Bring the parrot to class then." },
  { id: 5, excuse: "My goldfish knocked its bowl onto my homework. The ink ran and now it looks like modern art. I could submit it to the art department instead?", ridiculous_rating: 6, category: 'pets', will_work: false, teacher_reaction: "This is a math class." },
  { id: 6, excuse: "My snake constricted around my binder and won't let go. I'd show you but I left the whole situation on the kitchen table.", ridiculous_rating: 7, category: 'pets', will_work: false, teacher_reaction: "A photo would have helped your case." },

  // === Tech ===
  { id: 7, excuse: "ChatGPT wrote a better version of my essay, so I panicked and submitted neither out of principle.", ridiculous_rating: 6, category: 'tech', will_work: false, teacher_reaction: "So you chose integrity over grades. Interesting strategy." },
  { id: 8, excuse: "Git force-pushed to main and wiped out my entire homework branch. I learned a valuable lesson about version control instead.", ridiculous_rating: 3, category: 'tech', will_work: true, teacher_reaction: "At least you learned something." },
  { id: 9, excuse: "My computer gained sentience at 2 AM and refused to save the file. It said my thesis was 'logically flawed' and I should start over.", ridiculous_rating: 10, category: 'tech', will_work: false, teacher_reaction: "Your computer has better critical thinking than you do." },
  { id: 10, excuse: "The WiFi went out in my specific room only. Every other room in the house was fine. My room exists in a dead zone of knowledge.", ridiculous_rating: 4, category: 'tech', will_work: true, teacher_reaction: "You could have moved to another room." },
  { id: 11, excuse: "My printer printed the entire essay in invisible ink. I swear it's all there — you just need a UV light.", ridiculous_rating: 8, category: 'tech', will_work: false, teacher_reaction: "Hand me a UV light then. I'll wait." },
  { id: 12, excuse: "My laptop did a Windows update for 11 hours straight. I timed it. I have screenshots. The screenshots are on the laptop.", ridiculous_rating: 4, category: 'tech', will_work: true, teacher_reaction: "Honestly, I believe this one." },

  // === Family ===
  { id: 13, excuse: "My little brother sold my homework at his yard sale for 25 cents. Someone actually bought it. I hope they got a good grade.", ridiculous_rating: 7, category: 'family', will_work: false, teacher_reaction: "Tell your brother his pricing is insulting." },
  { id: 14, excuse: "My grandma used my essay to line the bottom of her bird cage. She said the content was 'fitting for that purpose.'", ridiculous_rating: 8, category: 'family', will_work: false, teacher_reaction: "Your grandmother is brutally honest." },
  { id: 15, excuse: "My parents grounded my homework. It's not allowed to leave the house until it thinks about what it's done.", ridiculous_rating: 9, category: 'family', will_work: false, teacher_reaction: "What exactly did your homework do?" },
  { id: 16, excuse: "My mom used my research paper as a coaster and now it has a perfect coffee ring on it. She says it adds character.", ridiculous_rating: 5, category: 'family', will_work: false, teacher_reaction: "Bring it in. I've graded worse." },
  { id: 17, excuse: "My dad turned my homework into a paper airplane and launched it into the neighbor's yard. He said the aerodynamics were 'excellent.'", ridiculous_rating: 7, category: 'family', will_work: false, teacher_reaction: "Did he at least measure the flight distance?" },
  { id: 18, excuse: "My family held an intervention about how much time I spend on homework. They confiscated all my textbooks. I'm academically sober now.", ridiculous_rating: 8, category: 'family', will_work: false, teacher_reaction: "I'm concerned on multiple levels." },

  // === Weather ===
  { id: 19, excuse: "A tornado came through and took my homework to Oz. If a girl in ruby slippers hands in my essay, that's plagiarism — she stole it from me.", ridiculous_rating: 9, category: 'weather', will_work: false, teacher_reaction: "There was no tornado in this area." },
  { id: 20, excuse: "It rained so hard my homework dissolved. I was left holding a soggy blank page and a broken dream.", ridiculous_rating: 5, category: 'weather', will_work: false, teacher_reaction: "Backpacks exist." },
  { id: 21, excuse: "Acid rain dissolved my homework on the walk to school. Only the title survived. The title was really good though.", ridiculous_rating: 7, category: 'weather', will_work: false, teacher_reaction: "We don't get acid rain here." },
  { id: 22, excuse: "The fog was so thick this morning I couldn't find my backpack. It was on my back the entire time but I didn't know that until I got to school.", ridiculous_rating: 8, category: 'weather', will_work: false, teacher_reaction: "You're wearing it right now." },
  { id: 23, excuse: "Lightning struck my homework specifically. Everything else on the desk was fine. My homework was apparently the most conductive thing in my room.", ridiculous_rating: 9, category: 'weather', will_work: false, teacher_reaction: "Lightning doesn't work like that." },
  { id: 24, excuse: "The wind blew my homework out of my hands and it landed in a puddle at the bus stop. A bus then drove through the puddle. There were witnesses.", ridiculous_rating: 4, category: 'weather', will_work: true, teacher_reaction: "Names of the witnesses, please." },

  // === Existential ===
  { id: 25, excuse: "I finished it but then I started questioning whether grades are just a social construct and accidentally became a philosopher instead.", ridiculous_rating: 10, category: 'existential', will_work: false, teacher_reaction: "This isn't philosophy class." },
  { id: 26, excuse: "I had an existential crisis at 3 AM and realized that in the grand scheme of the universe, this assignment is meaningless. I stand by that.", ridiculous_rating: 8, category: 'existential', will_work: false, teacher_reaction: "In the grand scheme of your GPA, it isn't." },
  { id: 27, excuse: "I was going to do it but then I thought: what if I'm living in a simulation and the homework isn't even real? Seemed risky to engage.", ridiculous_rating: 9, category: 'existential', will_work: false, teacher_reaction: "The zero in my gradebook is very real." },
  { id: 28, excuse: "My consciousness expanded beyond the concept of homework. I now exist on a higher plane. Assignments don't reach me up here.", ridiculous_rating: 10, category: 'existential', will_work: false, teacher_reaction: "Come back down. We have a test Friday." },
  { id: 29, excuse: "I read Camus and realized that the only serious philosophical question is whether to do homework. I chose not to. Absurdly.", ridiculous_rating: 7, category: 'existential', will_work: false, teacher_reaction: "Camus still showed up to work every day." },
  { id: 30, excuse: "The void called and it wanted my homework. I didn't want to but the void was very persuasive.", ridiculous_rating: 9, category: 'existential', will_work: false, teacher_reaction: "Tell the void it owes me an essay." },

  // === Health ===
  { id: 31, excuse: "I'm allergic to paper. I broke out in hives just looking at the assignment sheet. I have a doctor's note but it's on paper so I can't touch it.", ridiculous_rating: 8, category: 'health', will_work: false, teacher_reaction: "Email the doctor's note then." },
  { id: 32, excuse: "My hand fell asleep while writing and never woke up. It's been three days. My hand is in a coma.", ridiculous_rating: 9, category: 'health', will_work: false, teacher_reaction: "You're literally writing with that hand right now." },
  { id: 33, excuse: "My brain was buffering. You know when you walk into a room and forget why? That, but for six hours straight.", ridiculous_rating: 6, category: 'health', will_work: false, teacher_reaction: "Have you tried turning yourself off and on again?" },
  { id: 34, excuse: "I contracted a rare condition where I can only write in wingdings. I did the whole assignment but you'll need a decoder ring.", ridiculous_rating: 8, category: 'health', will_work: false, teacher_reaction: "That's not a real condition." },
  { id: 35, excuse: "My immune system rejected the assignment. My body physically would not let me complete it. It's a medical miracle, really.", ridiculous_rating: 9, category: 'health', will_work: false, teacher_reaction: "Your immune system has good taste." },
  { id: 36, excuse: "I got a headache from absorbing too much knowledge in other classes. My brain reached capacity. There was no room left for your homework.", ridiculous_rating: 6, category: 'health', will_work: false, teacher_reaction: "I seriously doubt your brain is at capacity." },

  // === Time ===
  { id: 37, excuse: "Time moved differently in my house last night. What felt like five minutes was actually eight hours. I'm basically a time traveler but a bad one.", ridiculous_rating: 7, category: 'time', will_work: false, teacher_reaction: "That's just procrastination." },
  { id: 38, excuse: "I got stuck in a time loop and kept doing the same homework over and over. I've technically done it 47 times but have nothing to show for it.", ridiculous_rating: 9, category: 'time', will_work: false, teacher_reaction: "Show me any one of the 47 copies." },
  { id: 39, excuse: "I completed it in a future timeline but that timeline hasn't happened yet. I'll hand it in when we get there. Should be any day now.", ridiculous_rating: 10, category: 'time', will_work: false, teacher_reaction: "The deadline was in this timeline." },
  { id: 40, excuse: "Daylight savings stole an hour from me and that was the exact hour I had planned for homework. I'm a victim of time policy.", ridiculous_rating: 5, category: 'time', will_work: false, teacher_reaction: "Daylight savings was two months ago." },
  { id: 41, excuse: "I finished it but in the wrong century. My essay is historically accurate for the 1800s but apparently that's 'not the assignment.'", ridiculous_rating: 8, category: 'time', will_work: false, teacher_reaction: "Correct. It was not the assignment." },
  { id: 42, excuse: "My alarm didn't go off because it was set for 7 AM in a different time zone. Technically I was on time in Tokyo.", ridiculous_rating: 5, category: 'time', will_work: false, teacher_reaction: "We are not in Tokyo." },

  // === Supernatural ===
  { id: 43, excuse: "A ghost possessed my pencil and wrote completely different answers. I watched in horror as my own hand betrayed me.", ridiculous_rating: 9, category: 'supernatural', will_work: false, teacher_reaction: "The ghost got better grades than you usually do." },
  { id: 44, excuse: "Aliens needed my homework for research purposes. They said Earth education is 'fascinating in its inefficiency.' They'll return it eventually.", ridiculous_rating: 10, category: 'supernatural', will_work: false, teacher_reaction: "When exactly is 'eventually'?" },
  { id: 45, excuse: "A wizard turned my homework invisible. It's right here in my hand — you just can't see it. Trust me.", ridiculous_rating: 8, category: 'supernatural', will_work: false, teacher_reaction: "Your hand is empty." },
  { id: 46, excuse: "My homework spontaneously combusted. I know how this sounds. I've brought the ashes as evidence.", ridiculous_rating: 10, category: 'supernatural', will_work: false, teacher_reaction: "That's a napkin." },
  { id: 47, excuse: "Bigfoot stole my backpack during a camping trip. I filed a police report but they didn't take it seriously for some reason.", ridiculous_rating: 8, category: 'supernatural', will_work: false, teacher_reaction: "You went camping on a school night?" },
  { id: 48, excuse: "My homework was cursed. Everyone who touched it got a D. I was trying to protect you, honestly.", ridiculous_rating: 7, category: 'supernatural', will_work: false, teacher_reaction: "I'll take my chances." },

  // === School ===
  { id: 49, excuse: "The school website crashed at 11:59 PM. My submission went through at 12:01 AM. Two minutes ruined my life.", ridiculous_rating: 2, category: 'school', will_work: true, teacher_reaction: "Send me the screenshot and I'll consider it." },
  { id: 50, excuse: "My locker jammed and my homework is trapped inside. Maintenance said they'd get to it 'sometime this week.' My homework is a prisoner of war.", ridiculous_rating: 4, category: 'school', will_work: true, teacher_reaction: "I'll email maintenance." },
  { id: 51, excuse: "The textbook gave wrong instructions. I followed them perfectly and got a completely different assignment. Blame the textbook, not me.", ridiculous_rating: 5, category: 'school', will_work: false, teacher_reaction: "Which page? Show me." },
  { id: 52, excuse: "The classroom clock stopped yesterday and I genuinely thought I had another hour. The clock lied to me and I trusted it.", ridiculous_rating: 4, category: 'school', will_work: true, teacher_reaction: "Fair point. That clock has been broken for weeks." },
  { id: 53, excuse: "The school firewall blocked the research website I needed. I tried to use a VPN but that's also blocked. I was trapped in a censorship loop.", ridiculous_rating: 3, category: 'school', will_work: true, teacher_reaction: "Use the library next time." },
  { id: 54, excuse: "Someone pulled the fire alarm during study hall and my homework got trampled in the evacuation. It died a hero.", ridiculous_rating: 6, category: 'school', will_work: false, teacher_reaction: "There was no fire alarm yesterday." },

  // === Creative ===
  { id: 55, excuse: "I turned my essay into a modern art installation and sold it for $200. I can give you a cut if that helps my grade.", ridiculous_rating: 8, category: 'creative', will_work: false, teacher_reaction: "I don't accept bribes. But how much are we talking?" },
  { id: 56, excuse: "I folded my homework into an origami crane. It's beautiful. I'd argue origami is harder than the assignment, so really I overdelivered.", ridiculous_rating: 7, category: 'creative', will_work: false, teacher_reaction: "Unfold it." },
  { id: 57, excuse: "My homework became sentient, wrote a resignation letter, and left. It said it 'deserved better working conditions.' I respect its boundaries.", ridiculous_rating: 10, category: 'creative', will_work: false, teacher_reaction: "Your homework has better boundaries than you do." },
  { id: 58, excuse: "I submitted my homework as an NFT. It's on the blockchain forever. That's way more permanent than paper. You're welcome.", ridiculous_rating: 8, category: 'creative', will_work: false, teacher_reaction: "I don't have a crypto wallet." },
  { id: 59, excuse: "My essay started as homework but evolved into a 300-page novel. I got a publishing deal so technically the assignment changed my life.", ridiculous_rating: 9, category: 'creative', will_work: false, teacher_reaction: "I'll accept a signed copy as extra credit." },
  { id: 60, excuse: "I used my homework as the lyrics for a song I wrote. It's on SoundCloud now. I'm getting streams. The education system can't contain my art.", ridiculous_rating: 7, category: 'creative', will_work: false, teacher_reaction: "What's your SoundCloud?" },
]
