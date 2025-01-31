import { http } from "@/utils/http";
import { Data } from "@/types/http";
import { StrategyMainData } from "@/types/strategy";
/**
 * @Description: 获取首页banner
 * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
 * @return {Promise}
 */

export const getStrategyMainDataAPI = (type: string) => {
    const res1 = <StrategyMainData[]>[
        {
            title: "COOP 介绍",
            type: "intro",
            image: "/static/strategy/strategy_coop_intro.png",
            content: [
                {
                    text: `         
        在《女神异闻录5 皇家版》中，玩家可以和缔结了Coop关系的NPC一同度过时间，并在满足条件的时候提升和对应Coop的关系。
        通过提升协助COOP等级，主角可以习得各种技能，享受优惠待遇。所以说提升COOP等级非常重要。提升COOP等级需要消耗CP值，每次等级提升后，当前累积的CP值会被重置。部分角色的COOP等级提升需要特定事件，而有些角色的COOP等级则是随剧情推进逐步提升。玩家需要根据每个角色的特征制定相应的攻略日程。
        `,
                    title: "COOP 简介",
                    type: "brintro",
                },
                {
                    text: `        
        每个角色协助COOP基本都是通过固有对话和特殊事件来提升等级的，但是特定的角色的协助等级仅仅是通过剧情提升的，例如三岛由辉、吉田寅之助这两位所有等级的必要CP都是零，选择什么都没有问题，并不影响协助等级的提升。其他的特殊的比如双子、伊格尔、摩尔加纳、新岛冴，其中双子需要通过携带特定的Persona，对话完成课题来提升协助等级，伊格尔、摩尔加纳、新岛冴则是随剧情推进逐步提升协助等级。
        所以，当需要完成三岛由辉月亮、吉田寅之助太阳、双子力量、伊格尔愚者、摩尔加纳魔术师、新岛冴审判、 这六个COOP时候，是不需要更换协助面具以便达到最大CP点数的。
        最后，因为每个协助COOP活动时间也不相同，所以需要一边把握每名角色的特征一边来定制相应的攻略日程！但是，由于皇家版的日程相对宽松，也不像无印那么紧张，所以一周目满COOP的话也很容易，之后会有简单的攻略提示，当然也会最大程度的规避剧透！
                    `,
                    title: "COOP 特征",
                    type: "feature",
                },
                {
                    text: `
        当你你想在关键阶段提升等级时候发现CP不够，可以通过一些设施或者其他方法来提升CP值。
        当然更加推荐以下方法，因为它们可以避免时间推进，节约更多的时间去做更有价值的事情(例如：十艘跳 :P)。
        · 占卜提升：最早在御船千早COOP五级的时候解锁，虽然限制一天一次但是每次花5000块就可以使确定的角色COOP上升5。
        · 道具提升：在四轩茶屋的邮筒（电影院旁边）寄出「预告信明信片」CP值会+2，这个道具可以在商店限定日期购入。
        · 神宫祈愿：祈愿可以对选定角色提升5或10点CP值，缺点就是上升值不是很稳定，而且需要消耗时间。
                    `,
                    title: "COOP 加速提升建议",
                    type: "speedup",
                },
            ],
        },
        {
            title: "COOP 人物详情",
            type: "detail",
            image: "/static/strategy/strategy_coop_intro.png",
            content: [
                {
                    table: "\n          RANK\t解锁\t简介\n2\t不良少年交涉\t在和敌人的对话交涉决裂时,假如敌人性格『开朗』,就可重新再交涉。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t隐形冲刺★\t就算在异世界奔跑也不容易被敌人发现\n6\t纸扇恢复★\t有机会让状态异常的伙伴恢复正常。\n7\t瞬杀\t在异世界奔跑接近敌人时,能立刻消灭等级比自己低超过9级的阴影。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。学会：极・疾风识破,\n11\t二觉\t解锁人格面具蚩尤\n        ",
                    title: "坂本龙司",
                    type: "bbls",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/f/f4/c5w9crv6l90lh5b0azz26ecnxusj0cr.png/60px-P5R_%E5%9D%82%E6%9C%AC%E9%BE%99%E5%8F%B8%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁\t简介\n2\t女子交涉\t在和敌人的对话交涉决裂时,假如敌人性别为女性,就可重新再交涉。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t色诱术★\t让敌人目光集中在自己身上有时会因此而取消行动。\n5\t假哭★\t可以再敌人恐吓我方时,让敌人产生动摇,便要求变得较宽松。\n6\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。习得技能：极・冰冻识破,\n11\t二觉\t解锁人格面具伊丝塔习得特性：魔性的极致\n        ",
                    title: "高卷杏",
                    type: "gjx",
                    text: "\n人格指数开启的RANK限制：\n    2级：体贴 Rank 2\n\t",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/8/80/mhhmlge16gsnu7l3advpcaefewpbkjr.png/60px-P5R_%E9%AB%98%E5%8D%B7%E6%9D%8F%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁\t简介\t\n1\t潜入道具的配方★\t潜入道具的初期配方已开放,可以开始制作潜入道具。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t猫咪交涉\t在和敌人的对话交涉决裂时,假如敌人外型是动物类,就可重新再交涉。\n5\t强夺秘宝★\t主人公的近战攻击打中之后,有机会可以从敌人身上获得道具。\n6\t密藏道具配方\t开放所有潜入道具配方。\n7\t纸伞恢复\t有机会让状态异常的伙伴恢复正常。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t超觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。\n11\t合成解锁\t解锁人格面具经津主 习得技能 极·电击识破,\n12\t三觉\t习得特性 威风凛凛的风范\n        ",
                    title: "摩尔加纳",
                    type: "mejn",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/4/49/6begn7vt6dy9ff06t420o1ub9j3pzge.png/60px-P5R_%E6%91%A9%E5%B0%94%E5%8A%A0%E7%BA%B3%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁\t效果\n1\t卡片复制★\t可进行技能卡的复制。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t艺术交涉\t在和敌人的对话交涉决裂时,假如敌人数量只有一只,就可重新再交涉。\n5\t卡片制作★\t可制作之前曾描绘过的技能卡。\n6\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n7\t即兴彩绘★\t可当场进行『卡片复制』跟『卡片制作』。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。习得技能：极・火焰识破,\n11\t二觉\t解锁人格面具奥汀习得特性：国士无双的眼力\n        ",
                    title: "喜多川祐介",
                    type: "xdcyj",
                    text: "\n人格指数开启的RANK限制：\n    6级：灵巧 Rank 4\n\t",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/6/65/6t1ltqd19nt6rxd0bazpgl8tdu30t1b.png/60px-P5R_%E5%96%9C%E5%A4%9A%E5%B7%9D%E7%A5%90%E4%BB%8B%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁\t效果\n1\t阴影微积分★\t在分析画面中可以显示敌人拥有的技能以及掉落道具了。\n3\t黑带交涉\t在和敌人的对话交涉决裂时,假如敌人会使用武术,就可重新再交涉。\n4\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n6\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n7\t阴影因数分解★\t在游标移动到敌人身上时,可以看到是『无效』丶『反弹』还是『吸收』。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。\n11\t二觉\t真二觉 解锁人格面具「西布莉」学会技能：学会：极・念动识破,\n12\t三觉\t真三觉\n        ",
                    title: "新岛真",
                    type: "xdz",
                    text: "\n人格指数开启的RANK限制：\n    解禁：知识 Rank 3\n    6级：魅力Rank Max\n\t",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/9/9e/d8pdqxszp6wlqu2eowhf2lb5bzw0lae.png/60px-P5R_%E6%96%B0%E5%B2%9B%E7%9C%9F%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁\t效果\n1\t士气支援★\t有时会发动卡加系或全体恢复等情报支援类辅助。\n2\t印象空间搜寻★\t在印象空间执行地图切换时,有特定机率让这个楼层的地图全部开放。\n4\t位置入侵\t战斗开始时,有特定机率逆转成HOLD UP状态。\n6\t动态支援\t『士气支援』效果发动时,有一定机率发动蓄力支援或SP恢复。\n7\t宝物恢复★\t结束战斗后,有特定机率让范围内的搜索物件全部恢复。\n9\t紧急切换\t在无法战斗的队员达到两人以上时,会与待命队员进行交换。\n10\t终极防御\t在队员受到会导致无法战斗的伤害时将攻击无效化。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。习得技能：宝物探知,\n11\t二觉\t解锁人格面具隐形鬼，习得特性：高深莫测的运算力\n        ",
                    title: "佐仓双叶",
                    type: "zcsy",
                    text: "\n人格指数开启的RANK限制：\n    2级：体贴 Rank 4\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/0/08/i125vyqzprc2mkcfoap7tj9ktrjbk2j.png/60px-P5R_%E4%BD%90%E4%BB%93%E5%8F%8C%E5%8F%B6%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁\t简介\n1\t栽培蔬菜★\t可以和春一起在顶楼的花盆中栽种蔬菜了。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t上流交涉\t在和敌人的对话交涉决裂时,假如敌人有2名以上,就可重新再交涉。\n5\t品种改良\t增加每次栽培蔬菜的收货量。\n6\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n7\t土壤改良★\t缩短栽培蔬菜栽种到收获的时间。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t春觉醒 习得技能 极・核热识破,\n11\t二觉\t解锁人格面具巴比伦大淫妇 习得特性：泰然自若的本性\n        ",
                    title: "奥村春",
                    type: "acc",
                    text: "\n人格指数开启的RANK限制：\n    4级：灵巧 Rank 4\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/5/58/8yh3sehinah4mxhkpvnuqdpxbifbwzp.png/60px-P5R_%E5%A5%A5%E6%9D%91%E6%98%A5%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁\t效果\n2\t侦探的具眼\t战斗开始时,有机会得知1名敌人的其中一项属性耐性。\n3\t超凡交涉\t在和敌人的对话交涉决裂时,假如敌人具有神格,就可重新再交涉。\n4\t名侦探的慧眼\t战斗开始时,有机会得知1名敌人的所有属性耐性。\n6\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n7\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n10\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n10\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。,\n11\t二觉\t解锁人格面具梅塔特隆 习得特性：反抗之刃\n        ",
                    title: "明智吾郎",
                    type: "mzwl",
                    text: "\n人格指数开启的RANK限制：\n    3级：知识 Rank 2、魅力 Rank 3\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/2/2d/iab8ohyaqck7ott7qnle6dwmlt4mt10.png/60px-P5R_%E6%98%8E%E6%99%BA%E5%90%BE%E9%83%8E%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁\t效果\n2\t单跳\t在殿堂时,可回避危机遇敌。\n4\t锁链勾绳\t可以在殿堂里,在敌人的背后使用勾绳,从较远的位置先制遇敌。\n6\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n6\t热血运动交涉\t在和敌人的对话交涉决裂时,有特定机率可与所有敌人重新再交涉一次。\n7\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。\n11\t二觉\t解锁人格面具马利亚习得技能 极·咒怨识破,\n12\t三觉\t习得特性 深夜的面纱。\n        ",
                    title: "芳泽霞",
                    type: "fzx",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/1/19/2g6adjbiibtrkkpqkdz9seuouedyo56.png/60px-P5R_%E8%8A%B3%E6%B3%BD%E9%9C%9E%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t\t效果\n1\t不羁交涉\tHOLD UP时选择对话,和阴影进行对话交涉。\n1\t阿尔卡那爆发\t进行人格面具合体的时候,可以根据每种阿尔卡那各自的协助级别获得对应的经验值。\n2\t第三只眼\t按下L2按钮,就能看到平时看不到的东西。\n3\t强力容器\t人格面具拥有格增加到8格。\n5\t超级容器\t人格面具拥有格增加到10格。\n6\t阿尔卡那超级爆发\t执行人格面具合体时,『阿尔卡那爆发』的经验值奖励增加。\n8\t究极容器\t人格面具拥有格增加到12格。\n11\t合成解锁\t执行人格面具合体时,『阿尔卡那爆发』的经验值奖励增加更多,解锁人格面具毗湿奴\n        ",
                    title: "伊格尔",
                    type: "yge",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/0/02/fvd21k3ni32helqrzxlaqhio387748s.png/60px-P5R_%E4%BC%8A%E6%A0%BC%E5%B0%94%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t集体断头台★\t将3个以上的人格面具合体,制造强力的人格面具。\n3\t隔离监禁★\t在天鹅绒房间入狱一定天数后,人格面具将学会耐性技能。\n5\t特别处分★\t支付额外的金钱,可以合体出超过主人公等级的人格面具。\n8\t断头台强化★\t增加了『集体断头台』的合体组合模式。,\n10\t特别待遇★\t可透过『特别处分』让金额较为便宜。解锁面具藏王权现\n        ",
                    title: "双子",
                    type: "sz",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/d/db/s0d3dqox9qg8ts6ikeq9pj5zk7v6rf0.png/60px-P5R_%E5%8D%A1%E8%90%9D%E8%8E%89%E5%A8%9C%26%E8%8A%AE%E4%B8%9D%E6%B1%80%E5%A8%9C%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t初级枪械改造★\t进行枪械改造,可以强化性能。\n3\t迷彩枪械改造★\t可进行附加异常状态的『迷彩改造』。\n5\t降价\t减低枪械改造所需花费的金额。\n7\t上级枪械改造★\t枪械的改造零件种类变多。\n10\t无价之宝★\t可免费进行枪械改造。解锁人格面具阿提斯\n        ",
                    title: "岩井宗久",
                    type: "yjzj",
                    text: "\n人格指数开启的RANK限制：\n    解禁：勇气 Rank 4\n    8级：勇气 Rank Max\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/c/c0/5botzu29g80gi07jo2zcnzc8yrrowtt.png/60px-P5R_%E5%B2%A9%E4%BA%95%E5%AE%97%E4%B9%85%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n2\t咖喱小知识\t可以制作为我方1名伙伴恢复少量SP的咖啡。\n4\t卢布朗咖喱的食谱\t可以制作制作在非战斗情况下恢复队伍所有人少量 20SP的咖喱。\n6\t咖啡的精髓★\t可以制作为我方1名伙伴恢复大量 100SP的咖啡。\n9\t卢布朗咖喱的要领\t可以制作制作在非战斗情况下恢复队伍所有人中量 50SP的咖喱。,\n10\t卢布朗咖喱的精髓★\t可以制作制作在非战斗情况下恢复队伍所有人大量 100SP的咖喱。解锁人格面具黄龙\n        ",
                    title: "佐仓惣治郎",
                    type: "zczzl",
                    text: "\n人格指数开启的RANK限制：\n    7级：体贴 Rank Max\n\t",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/d/d5/kywz0h11rc0ioeykpls0k8rl0ds5tdh.png/60px-P5R_%E4%BD%90%E4%BB%93%E6%83%A3%E6%B2%BB%E9%83%8E%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t自制速愈药★\t贩售的恢复类药品种类增加了。\n3\t自制灭菌药★\t贩售的恢复类药品中,追加了辅助效果药品。\n5\t自制预防药★\t贩售的辅助效果药品种类增加了。\n7\t打折优惠\t在诊所贩售的道具售价打折。,\n10\t自制复活药★\t贩售的复活类药品种类增加了。解锁人格面具爱丽丝\n        ",
                    title: "武见妙",
                    type: "wjm",
                    text: "\n人格指数开启的RANK限制：\n    2级：勇气 Rank 2\n    8级：魅力 Rank Max\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/5/5e/sswyuvro5epqwjuod62rp20oqj22udf.png/60px-P5R_%E6%AD%A6%E8%A7%81%E5%A6%99%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t运子帷幄★\t主人公行动时,可将待命队员与战斗队员替换。\n3\t打入\t可以在主人公使敌人倒地的时候,让待命队员进行追击。\n5\t围崩\t在危机遇敌的时候也可以逃走。\n7\t成金\t进入先制遇敌之后,可在我方回合内结束战斗的话,战斗的报酬金额变成2倍。\n9\t投子★\t逃走所需回合数变成零,可以立刻逃走。,\n10\t东乡系统\t在伙伴行动时,能够让行动的伙伴和待命队员进行交换。解锁人格面具路西法\n        ",
                    title: "东乡一二三",
                    type: "dxyes",
                    text: "\n人格指数开启的RANK限制：\n    解禁：魅力 Rank 3\n    8级：知识 Rank Max\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/9/9c/5ojzf2fk8ff7fkzo2fkrp6d8vrrqubl.png/60px-P5R_%E4%B8%9C%E4%B9%A1%E4%B8%80%E4%BA%8C%E4%B8%89%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n2\t交涉术★\t在对话交涉中,要求金钱与道具时有机会可以再追加要求。\n3\t募集经费★\t在对话交涉中,有特定几率可以要求更多的金钱。\n5\t印象操作术★\t在对话交涉中,提升敌人交出稀有道具的机率。\n8\t人心掌握术★\t在对话交涉中,必定能说服阴影成为人格面具加入我方。,\n10\t魅力演讲术★\t在对话交涉中,能将比自己等级高的阴影收服为自己的人格面具。解锁人格面具阿修罗\n        ",
                    title: "吉田寅之助",
                    type: "jtyzz",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/9/92/1fkgcgf7jplobbmvs98e53ny833zbcs.png/60px-P5R_%E5%90%89%E7%94%B0%E5%AF%85%E4%B9%8B%E5%8A%A9%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t混水摸鱼★\t可在川上上课时不专心听讲,把时间用来磨炼自我。具体时间为 6.3、7.2、9.23、10.5、11.5的上课期间\n3\t家事代理\t可委托川上,请她代为处理『泡咖啡』和『去投币式洗衣店洗衣服』。需要5000块 Rank 9以上 免费\n5\t彻底混水摸鱼\t藉由川上干扰其他老师上课,让可以不专心听讲的课程变多。增加时间段 6.16、6.25、9.30、10.31、11.11、11.16、1.20、1.25\n6\t超级家事代理\t『制作潜入道具』『制作咖喱』也可以委托川上代为处理。需要5000块 Rank 9以上 免费,\n10\t特别按摩★\t从异世界回来后,只要委托川上进行按摩,再累的夜晚也都可以外出。解锁人格面具阿尔达\n        ",
                    title: "川上贞代",
                    type: "cszd",
                    text: "\n人格指数开启的RANK限制：\n    解禁：勇气 Rank 3\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/0/0a/10eegmnyfdlvh7ccva0rga357iclmh6.png/60px-P5R_%E5%B7%9D%E4%B8%8A%E8%B4%9E%E4%BB%A3%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t开运占卜★\t5000块 当日限定 可进行提高指定的人格指数1.5倍加算率的占卜 。\n3\t财运占卜★\t5000块 当日限定 可进行再战斗中透过总攻击获胜时,2倍报酬金额提升的占卜。\n5\t契合度占卜★\t5000块 当日限定 可进行与制定对象加深羁绊的占卜。当持有命运面具时候，增加的结果得到1.2-1.5倍的修正\n7\t秘法·命运占卜★\t10000块 当日限定可进行能看到指定对象所有协助能力的占卜。\n8\t禁忌·命运占卜\t20000块 可进行让天鹅绒房间的警报立即发生,便于在异世界产生警报的占卜。\n10\t奥义·命运占卜★\t10000块 可进行清楚得知对象心情的占卜。最佳对话选项会呈现红字,解锁人格面具吉祥天\n        ",
                    title: "御船千早",
                    type: "ycqz",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/9/93/ha7lvol84f2nqqu72l58l7raeb8ki0d.png/60px-P5R_%E5%BE%A1%E8%88%B9%E5%8D%83%E6%97%A9%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t三岛的加油★\t在待命的队员也能得到70%经验值。\n3\t三岛的真心加油\t提高所获得的经验值。一般5%\n5\t三岛的全力加油\t提高在待命的队员所获得的85%经验值。\n7\t怪盗支持者的大声加油★\t大幅提高所获得的的经验值。一般10%,\n10\t救世祈愿★\t让在待命的队员所获得的的经验值与战斗队员一样多。解锁人格面具圣达芬\n        ",
                    title: "三岛由辉",
                    type: "sdyh",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/0/0c/kpci97gkthr1umjtpfen1ue567r5bbh.png/60px-P5R_%E4%B8%89%E5%B2%9B%E7%94%B1%E8%BE%89%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t一枪倒地★\t每次潜入时,可发动仅有一次的特殊射击让一只敌人倒地。\n2\t随意开火★\t在先制遇敌时,有特定机率用枪进行总攻击。攻击的伤害如果连续打A按钮，给予阴影的最大HP的25%左右的伤害\n3\t威吓射击★\t对话交涉中,可使用威吓射击,更容易说服人格面具加入。\n5\t洗不掉的污渍★\t在进行觉有附加异常状态的枪攻击时,该攻击的附加状态机率会上升。\n6\t节省射击★\t每次潜入时,可以使用3次『一枪倒地』。\n8\t点击散弹★\t『随意开火』的伤害提高。Rank 2的伤害从25%提升至50%\n10\t织田特殊射击★\t可以让主人公的枪击不受敌人对枪击的抵抗丶无效丶反弹丶吸收效果影响,解锁人格面具摩陀。\n        ",
                    title: "织田信也",
                    type: "ztxy",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/5/5e/sfkc2mbe523elnhfo1rfbp0iuri8tzt.png/60px-P5R_%E7%BB%87%E7%94%B0%E4%BF%A1%E4%B9%9F%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n1\t传闻的独家★\t每次找到新的安全小屋警戒度就会降低。\n3\t冲击的独家★\t警戒度比较不容易上升,在不被敌人发现下遇敌还胜利的话可以降低更多的警戒度。\n5\t前所未有的独家\t刚开始潜入殿堂时,能够以警戒度较低的状态下探索。\n7\t颤栗的独家★\t殿堂的警戒度几乎不会提升，到了第二天后就能变成0,\n10\t传说的独家★\t不论警戒度高低,都能容易先制遇敌。解锁人格面具别西卜\n        ",
                    title: "大宅一子",
                    type: "dzyz",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/3/30/la57dp31wxo3lc8209gl887n2mmjmor.png/60px-P5R_%E5%A4%A7%E5%AE%85%E4%B8%80%E5%AD%90%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t习得\t效果\n2\t心灵排毒·X\t当主人公陷入异常状态,有机会可以立即恢复正常。\n3\t莲心镜\t战斗开始时,主人公有机会获得蓄力及专心致志的效果。\n5\t正念疗法\t在主人公消耗SP时,主人公自身的SP有机会自动恢复。\n7\t速效心流\t『莲心镜』发动的机率有所提升。\n9\t心灵排毒·DX\t『心灵排毒·X』发动的机率有所提升,\nMax\t清醒疗法\t提升Rank 5效果增强，提升SP的回复量\n解锁\t合成解锁\t解锁人格面具瓦胡·马纳\n        ",
                    title: "丸喜拓人",
                    type: "wxtr",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/f/fc/0hqjzp7xf9fstjus6d1584vcd5qw4xk.png/60px-P5R_%E4%B8%B8%E5%96%9C%E6%8B%93%E4%BA%BA%E5%A4%B4%E5%83%8F.png",
                },
            ],
        },
        {
            title: "COOP 优先级推荐",
            type: "recommonad",
            image: "/static/strategy/strategy_coop_intro.png",
            content: [
                {
                    text: `
        丸喜拓人是涉及到主线剧情发展至关重要角色，所以是T0必须级别的推荐
        · 顾问官：丸喜拓人
        需要在11.17之前将其COOP升级到Rank 9,此角色是开启第三学期的唯一条件！
        `,
                    title: "优先级推荐：必须",
                    type: "",
                },

                {
                    text: `
        · 战车：坂本龙司
        COOP Rank 7习得技能瞬杀，可以在异世界撞死低于自己10级的怪，每次新周目第一个开满，用了都说好！
        · 节制：川上贞代
        可以提供大量自由时间，从开小差到帮你制作道具、洗衣服应有尽有。Rank 10甚至让你在探索印象空间后的晚上都能出门行动！（P4的主角看了都要馋哭了）。最理想的状态是可以在暑假之前将其COOP升满，但是需要严格制定流程，如果不行的话就会推迟一个多月！
        · 命运：御船千早
        兼攻略队友和战斗体验，Rank 1 速刷人格指数（也就1周目有用），Rank 3 快速刷钱，Rank 5 的契合度占卜可以增加队友羁绊CP值，Rank 8 的禁忌·命运占卜则是凹面具的必备技能。Rank 7 就是给写攻略的人提供的吧……
        · 星星：东乡一二三
        相比前两个，一二三的COOP技能则更偏向战斗体验的多样化，可以增加追击，替换队友甚至遇险时逃跑也是良策。
        `,
                    title: "优先级推荐★★★★★",
                    type: "",
                },

                {
                    text: `
        · 信念：芳泽霞
        芳泽的行动有限制，第三学期（12.22）之前只可以升级到Rank 5（最快需要消耗4次行动）,错过了后面就没了
        · 太阳：吉田寅之助
        交涉的艺术，需要省钱提高交涉概率这个必不可少，需要注意的是，在11月14日选举以后，不能再找吉田提升coop。
        · 力量：双子
        没有时间限制，但是在升级到Rank 5后解锁的技能可以使主角的战力急剧膨胀。虽然会大破产……
        · 正义：明智吾郎
        需要在11.17之前将其COOP升级到Rank 8，Rank 4会开启专属地点，此角色涉及到在游戏真结局动画中该角色是否出现。
        `,
                    title: "优先级推荐★★★★☆",
                    type: "",
                },

                {
                    text: `
        · 隐士：佐仓双叶
        · 恋爱：高卷杏
        · 女教皇：新岛真
        · 皇帝：喜多川祐介
        · 女皇：奥村春
        · 月亮：三岛由辉
        以上这几位队友，在前面的社群Rank达标之后可以酌情重视下，主要就是涉及队友面具的觉醒、帮助队友治愈以及保护己方等等！看你喜好进行安排即可。
        其中三岛由辉可以增加全队获得的经验值及待机队员获得的经验值，可以帮助待机队员不至于等级掉队太远。
        `,
                    title: "优先级推荐★★★☆☆",
                    type: "",
                },

                {
                    text: `
        · 倒悬者：岩井宗久
        · 塔：织田信也
        · 死神：武见妙
        织田信也可以增加先制的强度，另外两位则是可以提供战斗储备的辅助，比如买装备买药品之类！
        值得一提的武见妙在无印版本里面由于药品以及SP的紧缺是T1的存在，但是在皇家版以及后续的皇家重置版当中，重要程度一再降低，因为在药品这方面需求没那么紧张了！
        `,
                    title: "优先级推荐★★☆☆☆",
                    type: "",
                },

                {
                    text: `
        · 教皇：佐仓惣治郎
        · 恶魔：大宅一子
        `,
                    title: "优先级推荐★☆☆☆☆",
                    type: "",
                },

                {
                    text: `
    · 审判：新岛冴
    · 魔术师：摩尔加纳
    · 愚者：伊格尔

        `,
                    title: "优先级推荐：日期推进剧情锁定",
                    type: "",
                },
            ],
        },
    ];
    const res2 = <StrategyMainData[]>[
        {
            title: "COOP 优先级推荐",
            type: "recommonad",
            image: "/static/strategy/strategy_coop_intro.png",
            content: []
        },
        {
            title: "COOP 优先级推荐",
            type: "recommonad",
            image: "/static/strategy/strategy_coop_intro.png",
            content: []
        },
        {
            title: "COOP 优先级推荐",
            type: "recommonad",
            image: "/static/strategy/strategy_coop_intro.png",
            content: []
        },
    ];

    let res = <StrategyMainData[]>[];
    if (type === "coop") res = res1; 
    else if (type === "answer") res = res2;
    
    return new Promise<Data<StrategyMainData[]>>((resolve) => {
        resolve({
            code: "200",
            msg: "success",
            result: res,
        });
    });
};
