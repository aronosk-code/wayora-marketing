export default {
  nav: {
    howItWorks: "工作原理",
    pricing: "价格",
    forCreators: "创作者",
    about: "关于我们",
    contact: "联系我们",
    getApp: "获取应用",
  },
  common: {
    getTheApp: "获取应用",
    seeHowItWorks: "了解工作原理",
    startCreating: "开始创作",
    comingSoon: "即将推出",
    comingSoonTitle: "Wayora 即将到来",
    comingSoonText: "应用尚未上架应用商店。请再耐心等待，一切都会值得。",
    mostPopular: "最受欢迎",
    close: "关闭",
    trust: "免费探索 · 支持离线 · 7 种语言",
  },
  hero: {
    eyebrow: "由你的位置触发的语音导览",
    title: "每条路都有一个故事。让 Wayora 为你讲述。",
    subtitle:
      "Wayora 把你的驾车或步行变成一段有讲解的语音之旅。故事在你抵达的那一刻开始 —— 解放双手，目光向前，无需搜索。",
  },
  knows: {
    title: "它自然知道你在哪里",
    subtitle: "无需搜索，无需点击，无需看屏幕。Wayora 只是跟随你。",
    drive: {
      title: "你开车，它讲述",
      text: "当你经过重要的地方，故事会自动播放。",
    },
    walk: {
      title: "你步行，它带路",
      text: "一步步指引你走向隐秘的宝藏，每一站都有故事等待。",
    },
    eyes: {
      title: "目光向前，放下手机",
      text: "GPS 完成一切。你只需望向窗外。",
    },
  },
  how: {
    title: "工作原理",
    subtitle: "从打开应用到听到第一个故事，只需三步。",
    s1: { title: "打开地图", text: "实时查看你周围的所有路线。" },
    s2: { title: "选择路线", text: "从 20 分钟的散步到一整天的驾车之旅。" },
    s3: { title: "按下播放", text: "放下手机，剩下的交给 Wayora。" },
  },
  why: {
    title: "为什么选择 Wayora",
    points: [
      "GPS 触发故事",
      "支持离线",
      "真正的本地向导",
      "驾车与步行合一的路线",
      "7 种语言",
      "创作者获得公平报酬",
    ],
  },
  tours: {
    title: "精选路线",
    subtitle: "一窥你身边正在等待的故事。",
    duration: "时长",
    distance: "距离",
    rating: "评分",
  },
  creatorTeaser: {
    title: "你的城市。你的故事。你的收入。",
    text: "每当有人收听你的故事，Wayora 都会向创作者支付分成。",
    cta: "开始创作",
  },
  pricing: {
    title: "价格",
    subtitle: "免费开始，需要更多时再升级。",
    plans: [
      {
        name: "免费",
        price: "$0",
        period: "",
        tagline: "可永久体验一条完整路线。",
        features: ["一条完整路线", "离线地图", "7 种语言"],
        popular: false,
      },
      {
        name: "探索者",
        price: "$5.99",
        period: "/月",
        tagline: "每月 25 个故事。",
        features: ["每月 25 个故事", "附近全部路线", "支持离线", "7 种语言"],
        popular: false,
      },
      {
        name: "旅行者",
        price: "$9.99",
        period: "/月",
        tagline: "每月 75 个故事，并可创建自己的路线。",
        features: ["每月 75 个故事", "创建自己的路线", "附近全部路线", "支持离线", "优先支持"],
        popular: true,
      },
      {
        name: "无限",
        price: "$14.99",
        period: "/月",
        tagline: "每一个故事，每一条路线。",
        features: ["无限故事", "创建自己的路线", "全球所有路线", "支持离线", "优先支持"],
        popular: false,
      },
    ],
    compareTitle: "比较各方案",
    rows: [
      { label: "每月故事数", free: "1", explorer: "25", traveler: "75", unlimited: "无限" },
      { label: "创建自己的路线", free: "—", explorer: "—", traveler: "✓", unlimited: "✓" },
      { label: "附近全部路线", free: "—", explorer: "✓", traveler: "✓", unlimited: "✓" },
      { label: "离线地图", free: "✓", explorer: "✓", traveler: "✓", unlimited: "✓" },
      { label: "7 种语言", free: "✓", explorer: "✓", traveler: "✓", unlimited: "✓" },
    ],
    payoutsTitle: "创作者报酬如何计算",
    payoutsText:
      "每当创作者的故事被收听，他们都会获得订阅收入的分成。报酬按月结算，并在下个月初支付，没有最低门槛。",
  },
  testimonials: {
    title: "旅行者的好评",
    items: [
      {
        quote: "我们走完整条南海岸都没有打开过一次地图。故事出现得恰到好处。",
        name: "示例旅行者",
        place: "雷克雅未克",
      },
      {
        quote: "我走过一座自以为熟悉的城市，却是第一次真正听见它。",
        name: "示例旅行者",
        place: "里斯本",
      },
      {
        quote: "离线下载让我们在几个小时没有信号的山路上也能继续。",
        name: "示例旅行者",
        place: "阿尔卑斯山",
      },
    ],
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "出发前需要做计划吗？",
        a: "不需要。打开地图，选择一条路线，按下播放。Wayora 会在你抵达时根据位置触发每个故事。",
      },
      {
        q: "没有信号也能用吗？",
        a: "可以。出发前下载路线，它就能完全离线播放，GPS 也包含在内。",
      },
      {
        q: "步行和驾车都能用吗？",
        a: "都可以。许多路线把驾车与在各站点的短途步行结合在一起。",
      },
      {
        q: "支持哪些语言？",
        a: "七种：英语、冰岛语、西班牙语、葡萄牙语、德语、法语和中文。",
      },
      {
        q: "创作者如何获得报酬？",
        a: "每当创作者的故事被收听，他们都会获得订阅收入的分成，按月支付。",
      },
    ],
  },
  finalCta: {
    title: "你的下一段旅程，可能就是一次导览。",
    subtitle: "Wayora 即将登陆 iOS 和 Android。上线时我们会第一时间通知你。",
  },
  footer: {
    tagline: "会自动播放的语音导览。",
    product: "产品",
    company: "公司",
    legal: "法律",
    language: "语言",
    rights: "保留所有权利。",
  },
  pages: {
    howTitle: "工作原理",
    howIntro:
      "Wayora 负责规划，你只需欣赏。这里是整个旅程，从你打开应用的那一刻，到你抵达时响起的故事。",
    feelTitle: "它是什么感觉",
    feelText:
      "你把手机放进支架，驶出城镇，第一个故事就在身后的小镇消失时开始。没有列表要滑，没有按钮要按。公路决定节奏，Wayora 跟上它。",
    offlineTitle: "离线与 GPS 说明",
    offlineText:
      "每条路线都可以在出发前下载。音频、路线和触发点都存于你的手机，因此没有信号的山口听起来和城市街道完全一样。GPS 无需数据即可工作 —— Wayora 只是聆听你在哪里。",
    creatorsTitle: "把你所知变成一条路线。",
    creatorsIntro:
      "如果你住在某个地方，你早已知道那些值得讲述的故事。Wayora 为你提供工作室来录制、在地图上标记站点并发布 —— 每当有人收听，你都会获得报酬。",
    creatorsSteps: [
      { title: "录制", text: "用你的手机。每个站点一个故事，长短随心。" },
      { title: "标记站点", text: "把每个故事放到地图上，并设定它应当开始的位置。" },
      { title: "发布", text: "选择语言，设定价格，你的路线就会向附近的听众上线。" },
    ],
    earnTitle: "你的收入",
    earnText:
      "每当创作者的故事被收听，他们都会获得订阅收入的分成。没有最低门槛，报酬按月到账 —— 你的路线被播放得越多，收入越高。",
    studioTitle: "工作室工具",
    studioText:
      "录制并剪辑音频，在地图上拖动站点，像听众一样预览整条路线，并以七种语言发布。一切都在同一个地方，手机或浏览器均可。",
    aboutTitle: "我们打造 Wayora，是为了让旅行听起来像故事，而不是搜索。",
    aboutMission:
      "大多数旅行应用给你一张清单，然后祝你好运。我们想要的恰恰相反：让地方本身在恰当的时刻告诉你这里曾发生过什么。所以 Wayora 聆听你在哪里，并在你抵达时开口。",
    aboutGpsTitle: "为什么用 GPS 触发音频",
    aboutGpsText:
      "查阅信息会打破魔咒。当故事自行到来，道路依然在你眼前，地方自己开口。无需搜索，无需手持。",
    aboutVoicesTitle: "支持本地声音",
    aboutVoicesText:
      "最好的向导就是住在那里的人。Wayora 直接为他们录制的故事付费，因此你听到的路线来自真实的知识，并留在它们所属的地方。",
    contactTitle: "打个招呼",
    contactIntro: "有问题、想法，或一个值得讲述的故事？给我们留言，我们会尽快回复。",
    name: "姓名",
    email: "电子邮箱",
    message: "留言",
    send: "发送留言",
    sending: "发送中…",
    sentTitle: "谢谢 —— 你的留言已在路上。",
    sentText: "我们会阅读每一条留言，并尽快回复。",
    sendAnother: "再发送一条留言",
    help: "需要应用方面的帮助？",
    privacyTitle: "隐私政策",
    termsTitle: "服务条款",
    updated: "最后更新：2026 年 10 月",
    formError: "出了点问题，请重试。",
  },
};