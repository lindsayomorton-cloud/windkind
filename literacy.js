/* Spellwood structured-literacy data + helpers.
   Graphemes: "|" separates sound units; [x] marks the focus/tricky part.
   All entries drafted for educator review (teachingStatus "needs-review").
   Patterns in REVIEW_FIRST are hidden from children until a grown-up approves them. */
window.LIT=(()=>{
const P={
cvc:['a e i o u','Short vowel','Each sound in this word has one letter. Say each sound, then find its letter.'],
blend:['st nd','Blend','Two sounds sit side by side. Say both of them.'],
vce:['a_e','Silent e','The e at the end is quiet. It helps the vowel say its name.'],
ck:['ck','c-k','After a short vowel, the k sound at the end is often spelled c, k.'],
sh:['sh','s-h','The letters s and h work together to make one sound: sh.'],
th:['th','t-h','The letters t and h work together to make one sound: th.'],
ch:['ch','c-h','The letters c and h work together to make one sound: ch.'],
wh:['wh','w-h','The letters w and h work together at the start of this word.'],
ng:['ng','n-g','The letters n and g work together to make one sound at the end.'],
ch_k:['ch = k','c-h says k','In this word, c and h work together to say k.'],
oo_long:['oo','oo as in moon','Two o letters work together to say oo, like in moon.'],
oo_short:['oo','oo as in book','Two o letters can also say the sound in book and look.'],
igh:['igh','i-g-h','The letters i, g, h work together to say the long i sound.'],
ay:['ay','a-y','At the end of a word, a and y work together to say ay.'],
ea:['ea','e-a','The letters e and a work together to say ee in this word.'],
ee:['ee','e-e','Two e letters work together to say ee.'],
ear:['ear','e-a-r','The letters e, a, r work together to say ear.'],
ir:['ir','i-r','The letters i and r work together to say ir.'],
er:['er','e-r','The letters e and r work together to say er.'],
or:['or ore','o-r','The letters o and r work together to say or.'],
ar:['ar','a-r','The letters a and r work together to say ar.'],
ou:['ou','o-u','The letters o and u work together to say ow, like in ouch.'],
ow:['ow','o-w','The letters o and w can work together to say oh, like in snow.'],
aw:['aw','a-w','The letters a and w work together to say aw.'],
all:['all','a-l-l','The letters a, l, l work together to say all.'],
ll:['ll','double l','At the end of a short word, l is often doubled.'],
double:['tt','double letters','Two of the same letter in the middle help keep the first vowel short.'],
y_e:['y','y says ee','At the end of a longer word, y often says ee.'],
y_i:['y','y says i','At the end of a short word, y often says the long i sound.'],
long_before:['ind ost','Long vowel before n-d, s-t','Before n, d or s, t, the vowel often says its name.'],
ve:['ve','v-e at the end','English words do not end in v, so we add a quiet e.'],
ould:['ould','o-u-l-d','The letters o, u, l, d say ood. The l is quiet.'],
two_syl:['clap','Two parts','Clap the parts of the word. Spell one part at a time.'],
compound:['+','Two small words','Two small words join together to make this word.'],
al:['al','a-l','At the start of this word, a and l work together to say all.'],
heart:['♥','Heart word','This word has a tricky part we learn by heart.']};
const REVIEW_FIRST=['heart','ould','long_before','ve','y_i','al','ch_k','double','compound','two_syl'];
const W={
saw:['s|[aw]','aw','I saw a fox in the woods.'],home:['h|[o]|m|[e]','vce','Fox walks home after school.'],soon:['s|[oo]|n','oo_long','We will eat lunch soon.'],stand:['[s]|[t]|a|n|d','blend','Please stand up tall.'],box:['b|o|x','cvc','The toy is in the box.'],upon:['u|p|o|n','two_syl','The bird sat upon the branch.'],first:['f|[ir]|s|t','ir','I was first in line.'],came:['c|[a]|m|[e]','vce','My friend came to play.'],girl:['g|[ir]|l','ir','The girl has a red hat.'],house:['h|[ou]|se','ou','Beaver lives in a wooden house.'],find:['f|[i]|[n]|[d]','long_before','Can you find the acorn?'],because:['b|e|c|[au]|[se]','heart','I wear a coat because it is cold.'],made:['m|[a]|d|[e]','vce','I made a card for my mom.'],could:['c|[ou]|[l]|d','ould','Could you help me, please?'],book:['b|[oo]|k','oo_short','I read a book in bed.'],look:['l|[oo]|k','oo_short','Look at the big tree!'],mother:['m|[o]|th|[er]','heart','My mother reads to me.'],run:['r|u|n','cvc','I can run fast.'],school:['s|[ch]|[oo]|l','ch_k','We go to school by bus.'],people:['p|[eo]|p|[le]','heart','Many people came to the party.'],night:['n|[igh]|t','igh','The moon shines at night.'],into:['i|n|t|o','compound','The frog jumped into the pond.'],say:['s|[ay]','ay','What did you say?'],think:['[th]|i|n|k','th','I think it will rain.'],back:['b|a|[ck]','ck','Come back soon!'],
big:['b|i|g','cvc','An elephant is big.'],where:['[wh]|[ere]','heart','Where is my hat?'],am:['a|m','cvc','I am six years old.'],ball:['b|[all]','all','Kick the ball to me.'],morning:['m|[or]|n|i|[ng]','or','I eat breakfast in the morning.'],live:['l|i|[ve]','ve','Fish live in the pond.'],four:['f|[our]','heart','A dog has four legs.'],last:['l|a|[s]|[t]','blend','This is the last cookie.'],color:['c|[o]|l|[or]','heart','Blue is my favorite color.'],away:['a|w|[ay]','ay','The bird flew away.'],red:['r|e|d','cvc','The apple is red.'],friend:['f|r|[ie]|n|d','heart','My friend shares her snack.'],pretty:['p|r|e|[tt]|[y]','double','The flower is pretty.'],eat:['[ea]|t','ea','We eat dinner at six.'],want:['w|[a]|n|t','heart','I want a glass of water.'],year:['y|[ear]','ear','I turn seven this year.'],white:['[wh]|[i]|t|[e]','wh','Snow is white.'],got:['g|o|t','cvc','I got a new book.'],play:['p|l|[ay]','ay','Let us play outside.'],found:['f|[ou]|n|d','ou','I found a shiny rock.'],left:['l|e|[f]|[t]','blend','I write with my left hand.'],men:['m|e|n','cvc','Two men fixed the road.'],bring:['b|r|i|[ng]','ng','Please bring your coat.'],wish:['w|i|[sh]','sh','I wish I could fly.'],black:['b|l|a|[ck]','ck','The cat is black.'],
may:['m|[ay]','ay','May I have a turn?'],let:['l|e|t','cvc','Let me help you.'],use:['[u]|s|[e]','vce','Use a pencil to write.'],these:['[th]|[e]|s|[e]','vce','These shoes are new.'],right:['r|[igh]|t','igh','Turn right at the tree.'],present:['p|r|e|s|e|n|t','two_syl','I got a present for my birthday.'],tell:['t|e|[ll]','ll','Tell me a story.'],next:['n|e|x|t','blend','You are next in line.'],please:['p|l|[ea]|[se]','ea','Please pass the bread.'],leave:['l|[ea]|[ve]','ea','We leave for the park at noon.'],hand:['h|a|[n]|[d]','blend','Hold my hand.'],more:['m|[ore]','or','Can I have more milk?'],why:['[wh]|[y]','y_i','Why is the sky blue?'],better:['b|e|[tt]|[er]','double','I feel better today.'],under:['u|n|d|[er]','er','The cat is under the bed.'],while:['[wh]|[i]|l|[e]','wh','Wait here while I get my bag.'],should:['sh|[ou]|[l]|d','ould','You should wear a hat.'],never:['n|e|v|[er]','er','I never eat bugs!'],each:['[ea]|ch','ea','Each child gets a cupcake.'],best:['b|e|[s]|[t]','blend','You are my best friend.'],another:['a|n|[o]|th|[er]','compound','May I have another one?'],seem:['s|[ee]|m','ee','You seem happy today.'],tree:['t|r|[ee]','ee','The owl sleeps in a tree.'],name:['n|[a]|m|[e]','vce','What is your name?'],dear:['d|[ear]','ear','Dear Grandma, I miss you.'],
ran:['r|a|n','cvc','The dog ran to the gate.'],five:['f|[i]|v|[e]','vce','I have five fingers on each hand.'],read:['r|[ea]|d','ea','I like to read books.'],over:['o|v|[er]','er','The cow jumped over the moon.'],such:['s|u|[ch]','ch','That was such a fun day!'],way:['w|[ay]','ay','Which way is the park?'],too:['t|[oo]','oo_long','I want to come too.'],shall:['[sh]|a|[ll]','ll','Shall we go for a walk?'],own:['[ow]|n','ow','I have my own room.'],most:['m|[o]|[s]|[t]','long_before','I like the red one the most.'],sure:['s|[ure]','heart','Are you sure?'],thing:['[th]|i|[ng]','th','What is that thing?'],only:['o|n|l|[y]','y_e','I have only one shoe.'],near:['n|[ear]','ear','The pond is near the tree.'],than:['[th]|a|n','th','A bear is bigger than a fox.'],open:['o|p|e|n','two_syl','Please open the door.'],kind:['k|[i]|[n]|[d]','long_before','Be kind to your friends.'],must:['m|u|[s]|[t]','blend','You must wash your hands.'],high:['h|[igh]','igh','The kite flew high.'],far:['f|[ar]','ar','The moon is far away.'],both:['b|o|[th]','th','I used both hands.'],end:['e|[n]|[d]','blend','That is the end of the story.'],also:['[al]|s|o','al','I also like pizza.'],until:['u|n|t|i|l','two_syl','Wait until the bell rings.'],call:['c|[all]','all','I will call you later.']};
const SYL={upon:['up','on'],present:['pres','ent'],open:['o','pen'],until:['un','til'],into:['in','to'],another:['an','oth','er'],morning:['morn','ing'],mother:['moth','er'],people:['peo','ple'],because:['be','cause'],color:['col','or'],pretty:['pret','ty'],better:['bet','ter'],under:['un','der'],never:['nev','er'],over:['o','ver'],only:['on','ly'],also:['al','so'],away:['a','way']};
const cache={};
function meta(word){if(cache[word])return cache[word];const e=W[word];let gr,foc,pattern=null,sentence='';
if(e){const parts=e[0].split('|');gr=parts.map(p=>p.replace(/[\[\]]/g,''));foc=parts.map(p=>p.startsWith('['));pattern=e[1];sentence=e[2];if(gr.join('')!==word){gr=null}}
if(!gr){gr=[...word];foc=gr.map(()=>false);pattern=null}
const letters=[];gr.forEach((g,gi)=>{[...g].forEach((ch,k)=>letters.push({g:gi,start:k===0,end:k===g.length-1,focus:foc[gi]}))});
const p=pattern&&P[pattern];
const m={word,graphemes:gr,focus:foc,letters,pattern,sentence,syllables:SYL[word]||[word],patternLabel:p?p[0]:'',patternName:p?p[1]:'',explain:p?p[2]:'',needsApproval:!!pattern&&REVIEW_FIRST.includes(pattern),teachingStatus:'needs-review',related:pattern?Object.keys(W).filter(w=>w!==word&&W[w][1]===pattern):[]};
return cache[word]=m}
/* Compare a same-length attempt to the target. Never reveals letters. */
function analyze(target,attempt){const t=[...target],a=[...attempt],m=meta(target);
if(a.length<t.length)return {cat:'missing',wrong:[],msg:'A letter is missing. Listen again.'};
if(a.length>t.length)return {cat:'extra',wrong:[],msg:'There is an extra letter.'};
const wrong=t.map((ch,i)=>a[i]===ch?-1:i).filter(i=>i>=0);
if(wrong.length===2&&a[wrong[0]]===t[wrong[1]]&&a[wrong[1]]===t[wrong[0]])return {cat:'order',wrong,msg:'So close! Two letters swapped places. Look at the glowing boxes.'};
if(m.pattern&&wrong.length&&wrong.every(i=>m.letters[i].focus))return {cat:'pattern',wrong,msg:'Almost! Look at the glowing part. Think about the '+(m.patternName||'spelling')+' pattern.',pattern:m.pattern};
return {cat:'letter',wrong,msg:wrong.length===1?'Almost! One letter needs fixing. Tap the glowing box to take it out.':'Good try! Tap the glowing boxes to take those letters out, then try again.'}}
const ALL=Object.keys(W);
return {P,W,meta,analyze,ALL,REVIEW_FIRST}})();
