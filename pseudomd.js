const fs = require('fs')

const tagTmpl = [
  '美食',
  '生活',
  '随笔',
  '电影',
  '旅游',
  '前端',
  '嵌入式',
  '牢骚',
  '游戏',
  '社会',
  '诗词歌赋'
]

const twoword = [
  '朱砂',
  '天下',
  '杀伐',
  '人家',
  '韶华',
  '风华',
  '繁华',
  '血染',
  '墨染',
  '白衣',
  '素衣',
  '嫁衣',
  '倾城',
  '孤城',
  '空城',
  '旧城',
  '旧人',
  '伊人',
  '心疼',
  '春风',
  '古琴',
  '无情',
  '迷离',
  '奈何',
  '断弦',
  '焚尽',
  '散乱',
  '陌路',
  '乱世',
  '笑靥',
  '浅笑',
  '明眸',
  '轻叹',
  '烟火',
  '一生',
  '三生',
  '浮生',
  '桃花',
  '梨花',
  '落花',
  '烟花',
  '离殇',
  '情殇',
  '爱殇',
  '剑殇',
  '灼伤',
  '仓皇',
  '匆忙',
  '陌上',
  '清商',
  '焚香',
  '墨香',
  '微凉',
  '断肠',
  '痴狂',
  '凄凉',
  '黄梁',
  '未央',
  '成双',
  '无恙',
  '虚妄',
  '凝霜',
  '洛阳',
  '长安',
  '江南',
  '忘川',
  '千年',
  '纸伞',
  '烟雨',
  '回眸',
  '公子',
  '红尘',
  '红颜',
  '红衣',
  '红豆',
  '红线',
  '青丝',
  '青史',
  '青冢',
  '白发',
  '白首',
  '白骨',
  '黄土',
  '黄泉',
  '碧落',
  '紫陌'
]

const threeword = [
  '月微醺',
  '为君狂',
  '若不见',
  '醉倾城',
  '莫相离',
  '踏莎行',
  '念苍颜',
  '断青丝',
  '冷月魄',
  '月色寒',
  '湿红妆',
  '琉璃月',
  '烟月稀',
  '伴紫陌',
  '风拂尽'
]

const fourword = [
  '情深缘浅',
  '情深不寿',
  '莫失莫忘',
  '阴阳相隔',
  '如花美眷',
  '似水流年',
  '眉目如画',
  '曲终人散',
  '繁华落尽',
  '不诉离殇',
  '一世长安'
]

for (let i = 0; i < 20; i++) {
  let tmpl = `---
lastUpdate: ${Math.round(Date.now() - Math.random() * 8000000)}
preview: ${generateGufeng(twoword, threeword, fourword)}
tags:
${generateTaglist(tagTmpl)}
---

# Pseudo Markdown Posts No.${i}\n> This is the No.${i} of 20 markdown files`
  fs.writeFileSync(`./blog/posts/pseudoMarkdown${i}.md`, tmpl)
}

function choose(arglist, sum) {
  let arr = []
  for (arg of arglist) {
    arr.push(arg)
  }
  let ret = []
  while (sum--) {
    let r = Math.floor(Math.random() * arr.length)
    ret.push(arr[r])
    arr.splice(r, 1)
  }
  if (ret.length == 1) {
    ret = ret[0]
  }
  return ret
}

function generateTaglist(tmpl) {
  let i = Math.round(Math.random() * 4) + 1
  let taglist = ''
  while (i--) {
    taglist += ` - ${choose(tmpl, 1)}\n`
  }
  return taglist
}

function generateGufeng(tw, thw, fw) {
  let twc = choose(tw, 4)
  let thwc = choose(thw, 3)
  let fwc = choose(fw, 1)
  let str =
    twc.pop() +
    twc.pop() +
    '，' +
    twc.pop() +
    thwc.pop() +
    '。' +
    fwc +
    thwc.pop() +
    '，' +
    twc.pop() +
    thwc.pop() +
    '。'
  return str
}
