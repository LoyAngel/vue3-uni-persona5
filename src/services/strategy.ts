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
            type: "coopintro",
            image: "http://littlering.cn/persona5/static/strategy/strategy_coop_intro.png",
            content: [
                {
                    text: `         
        在《女神异闻录5 皇家版》中，玩家可以和缔结了Coop关系的NPC一同度过时间，并在满足条件的时候提升和对应Coop的关系。
        通过提升协助COOP等级，主角可以解锁技能名称各种技能，享受优惠待遇。所以说提升COOP等级非常重要。提升COOP等级需要消耗CP值，每次等级提升后，当前累积的CP值会被重置。部分角色的COOP等级提升需要特定事件，而有些角色的COOP等级则是随剧情推进逐步提升。玩家需要根据每个角色的特征制定相应的攻略日程。
        `,
                    title: "COOP 简介",
                    type: "coopbrintro",
                },
                {
                    text: `        
        每个角色协助COOP基本都是通过固有对话和特殊事件来提升等级的，但是特定的角色的协助等级仅仅是通过剧情提升的，例如三岛由辉、吉田寅之助这两位所有等级的必要CP都是零，选择什么都没有问题，并不影响协助等级的提升。其他的特殊的比如双子、伊格尔、摩尔加纳、新岛冴，其中双子需要通过携带特定的Persona，对话完成课题来提升协助等级，伊格尔、摩尔加纳、新岛冴则是随剧情推进逐步提升协助等级。
        所以，当需要完成三岛由辉月亮、吉田寅之助太阳、双子力量、伊格尔愚者、摩尔加纳魔术师、新岛冴审判、 这六个COOP时候，是不需要更换协助面具以便达到最大CP点数的。
        最后，因为每个协助COOP活动时间也不相同，所以需要一边把握每名角色的特征一边来定制相应的攻略日程！但是，由于皇家版的日程相对宽松，也不像无印那么紧张，所以一周目满COOP的话也很容易，之后会有简单的攻略提示，当然也会最大程度的规避剧透！
                    `,
                    title: "COOP 特征",
                    type: "coopfeature",
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
                    type: "coopspeedup",
                },
            ],
        },
        {
            title: "COOP 人物详情",
            type: "coopdetail",
            image: "http://littlering.cn/persona5/static/strategy/strategy_coop_intro.png",
            content: [
                {
                    table: "\n          RANK\t解锁技能名称\t简介\n2\t不良少年交涉\t在和敌人的对话交涉决裂时,假如敌人性格『开朗』,就可重新再交涉。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t隐形冲刺★\t就算在异世界奔跑也不容易被敌人发现\n6\t纸扇恢复★\t有机会让状态异常的伙伴恢复正常。\n7\t瞬杀\t在异世界奔跑接近敌人时,能立刻消灭等级比自己低超过9级的阴影。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。学会：极・疾风识破,\n11\t二觉\t解锁人格面具蚩尤\n        ",
                    title: "坂本龙司",
                    type: "coopbbls",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/f/f4/c5w9crv6l90lh5b0azz26ecnxusj0cr.png/60px-P5R_%E5%9D%82%E6%9C%AC%E9%BE%99%E5%8F%B8%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t简介\n2\t女子交涉\t在和敌人的对话交涉决裂时,假如敌人性别为女性,就可重新再交涉。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t色诱术★\t让敌人目光集中在自己身上有时会因此而取消行动。\n5\t假哭★\t可以再敌人恐吓我方时,让敌人产生动摇,便要求变得较宽松。\n6\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。解锁技能名称技能：极・冰冻识破,\n11\t二觉\t解锁人格面具伊丝塔解锁技能名称特性：魔性的极致\n        ",
                    title: "高卷杏",
                    type: "coopgjx",
                    text: "\n人格指数开启的RANK限制：\n    2级：体贴 Rank 2\n\t",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/8/80/mhhmlge16gsnu7l3advpcaefewpbkjr.png/60px-P5R_%E9%AB%98%E5%8D%B7%E6%9D%8F%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t简介\t\n1\t潜入道具的配方★\t潜入道具的初期配方已开放,可以开始制作潜入道具。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t猫咪交涉\t在和敌人的对话交涉决裂时,假如敌人外型是动物类,就可重新再交涉。\n5\t强夺秘宝★\t主人公的近战攻击打中之后,有机会可以从敌人身上获得道具。\n6\t密藏道具配方\t开放所有潜入道具配方。\n7\t纸伞恢复\t有机会让状态异常的伙伴恢复正常。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t超觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。\n11\t合成解锁\t解锁人格面具经津主 解锁技能名称技能 极·电击识破,\n12\t三觉\t解锁技能名称特性 威风凛凛的风范\n        ",
                    title: "摩尔加纳",
                    type: "coopmejn",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/4/49/6begn7vt6dy9ff06t420o1ub9j3pzge.png/60px-P5R_%E6%91%A9%E5%B0%94%E5%8A%A0%E7%BA%B3%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t卡片复制★\t可进行技能卡的复制。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t艺术交涉\t在和敌人的对话交涉决裂时,假如敌人数量只有一只,就可重新再交涉。\n5\t卡片制作★\t可制作之前曾描绘过的技能卡。\n6\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n7\t即兴彩绘★\t可当场进行『卡片复制』跟『卡片制作』。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。解锁技能名称技能：极・火焰识破,\n11\t二觉\t解锁人格面具奥汀解锁技能名称特性：国士无双的眼力\n        ",
                    title: "喜多川祐介",
                    type: "coopxdcyj",
                    text: "\n人格指数开启的RANK限制：\n    6级：灵巧 Rank 4\n\t",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/6/65/6t1ltqd19nt6rxd0bazpgl8tdu30t1b.png/60px-P5R_%E5%96%9C%E5%A4%9A%E5%B7%9D%E7%A5%90%E4%BB%8B%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t阴影微积分★\t在分析画面中可以显示敌人拥有的技能以及掉落道具了。\n3\t黑带交涉\t在和敌人的对话交涉决裂时,假如敌人会使用武术,就可重新再交涉。\n4\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n6\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n7\t阴影因数分解★\t在游标移动到敌人身上时,可以看到是『无效』丶『反弹』还是『吸收』。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。\n11\t二觉\t真二觉 解锁人格面具「西布莉」学会技能：学会：极・念动识破,\n12\t三觉\t真三觉\n        ",
                    title: "新岛真",
                    type: "coopxdz",
                    text: "\n人格指数开启的RANK限制：\n    解禁：知识 Rank 3\n    6级：魅力Rank Max\n\t",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/9/9e/d8pdqxszp6wlqu2eowhf2lb5bzw0lae.png/60px-P5R_%E6%96%B0%E5%B2%9B%E7%9C%9F%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t士气支援★\t有时会发动卡加系或全体恢复等情报支援类辅助。\n2\t印象空间搜寻★\t在印象空间执行地图切换时,有特定机率让这个楼层的地图全部开放。\n4\t位置入侵\t战斗开始时,有特定机率逆转成HOLD UP状态。\n6\t动态支援\t『士气支援』效果发动时,有一定机率发动蓄力支援或SP恢复。\n7\t宝物恢复★\t结束战斗后,有特定机率让范围内的搜索物件全部恢复。\n9\t紧急切换\t在无法战斗的队员达到两人以上时,会与待命队员进行交换。\n10\t终极防御\t在队员受到会导致无法战斗的伤害时将攻击无效化。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。解锁技能名称技能：宝物探知,\n11\t二觉\t解锁人格面具隐形鬼，解锁技能名称特性：高深莫测的运算力\n        ",
                    title: "佐仓双叶",
                    type: "coopzcsy",
                    text: "\n人格指数开启的RANK限制：\n    2级：体贴 Rank 4\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/0/08/i125vyqzprc2mkcfoap7tj9ktrjbk2j.png/60px-P5R_%E4%BD%90%E4%BB%93%E5%8F%8C%E5%8F%B6%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t简介\n1\t栽培蔬菜★\t可以和春一起在顶楼的花盆中栽种蔬菜了。\n3\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n4\t上流交涉\t在和敌人的对话交涉决裂时,假如敌人有2名以上,就可重新再交涉。\n5\t品种改良\t增加每次栽培蔬菜的收货量。\n6\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n7\t土壤改良★\t缩短栽培蔬菜栽种到收获的时间。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t春觉醒 解锁技能名称技能 极・核热识破,\n11\t二觉\t解锁人格面具巴比伦大淫妇 解锁技能名称特性：泰然自若的本性\n        ",
                    title: "奥村春",
                    type: "coopacc",
                    text: "\n人格指数开启的RANK限制：\n    4级：灵巧 Rank 4\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/5/58/8yh3sehinah4mxhkpvnuqdpxbifbwzp.png/60px-P5R_%E5%A5%A5%E6%9D%91%E6%98%A5%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n2\t侦探的具眼\t战斗开始时,有机会得知1名敌人的其中一项属性耐性。\n3\t超凡交涉\t在和敌人的对话交涉决裂时,假如敌人具有神格,就可重新再交涉。\n4\t名侦探的慧眼\t战斗开始时,有机会得知1名敌人的所有属性耐性。\n6\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n7\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n10\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n10\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。,\n11\t二觉\t解锁人格面具梅塔特隆 解锁技能名称特性：反抗之刃\n        ",
                    title: "明智吾郎",
                    type: "coopmzwl",
                    text: "\n人格指数开启的RANK限制：\n    3级：知识 Rank 2、魅力 Rank 3\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/2/2d/iab8ohyaqck7ott7qnle6dwmlt4mt10.png/60px-P5R_%E6%98%8E%E6%99%BA%E5%90%BE%E9%83%8E%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n2\t单跳\t在殿堂时,可回避危机遇敌。\n4\t锁链勾绳\t可以在殿堂里,在敌人的背后使用勾绳,从较远的位置先制遇敌。\n6\t追击\t在主人公的攻击未能使敌人倒地的情况下,进行追击。\n6\t热血运动交涉\t在和敌人的对话交涉决裂时,有特定机率可与所有敌人重新再交涉一次。\n7\t纸扇恢复\t有机会让状态异常的伙伴恢复正常。\n8\t强忍\t即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。\n9\t掩护\t在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。\n10\t觉醒\t拥有的人格面具获得最终进化,诞生为神话的诡骗师。\n11\t二觉\t解锁人格面具马利亚解锁技能名称技能 极·咒怨识破,\n12\t三觉\t解锁技能名称特性 深夜的面纱。\n        ",
                    title: "芳泽霞",
                    type: "coopfzx",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/1/19/2g6adjbiibtrkkpqkdz9seuouedyo56.png/60px-P5R_%E8%8A%B3%E6%B3%BD%E9%9C%9E%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t不羁交涉\tHOLD UP时选择对话,和阴影进行对话交涉。\n1\t阿尔卡那爆发\t进行人格面具合体的时候,可以根据每种阿尔卡那各自的协助级别获得对应的经验值。\n2\t第三只眼\t按下L2按钮,就能看到平时看不到的东西。\n3\t强力容器\t人格面具拥有格增加到8格。\n5\t超级容器\t人格面具拥有格增加到10格。\n6\t阿尔卡那超级爆发\t执行人格面具合体时,『阿尔卡那爆发』的经验值奖励增加。\n8\t究极容器\t人格面具拥有格增加到12格。\n11\t合成解锁\t执行人格面具合体时,『阿尔卡那爆发』的经验值奖励增加更多,解锁人格面具毗湿奴\n        ",
                    title: "伊格尔",
                    type: "coopyge",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/0/02/fvd21k3ni32helqrzxlaqhio387748s.png/60px-P5R_%E4%BC%8A%E6%A0%BC%E5%B0%94%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t集体断头台★\t将3个以上的人格面具合体,制造强力的人格面具。\n3\t隔离监禁★\t在天鹅绒房间入狱一定天数后,人格面具将学会耐性技能。\n5\t特别处分★\t支付额外的金钱,可以合体出超过主人公等级的人格面具。\n8\t断头台强化★\t增加了『集体断头台』的合体组合模式。,\n10\t特别待遇★\t可透过『特别处分』让金额较为便宜。解锁面具藏王权现\n        ",
                    title: "双子",
                    type: "coopsz",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/d/db/s0d3dqox9qg8ts6ikeq9pj5zk7v6rf0.png/60px-P5R_%E5%8D%A1%E8%90%9D%E8%8E%89%E5%A8%9C%26%E8%8A%AE%E4%B8%9D%E6%B1%80%E5%A8%9C%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t初级枪械改造★\t进行枪械改造,可以强化性能。\n3\t迷彩枪械改造★\t可进行附加异常状态的『迷彩改造』。\n5\t降价\t减低枪械改造所需花费的金额。\n7\t上级枪械改造★\t枪械的改造零件种类变多。\n10\t无价之宝★\t可免费进行枪械改造。解锁人格面具阿提斯\n        ",
                    title: "岩井宗久",
                    type: "coopyjzj",
                    text: "\n人格指数开启的RANK限制：\n    解禁：勇气 Rank 4\n    8级：勇气 Rank Max\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/c/c0/5botzu29g80gi07jo2zcnzc8yrrowtt.png/60px-P5R_%E5%B2%A9%E4%BA%95%E5%AE%97%E4%B9%85%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n2\t咖喱小知识\t可以制作为我方1名伙伴恢复少量SP的咖啡。\n4\t卢布朗咖喱的食谱\t可以制作制作在非战斗情况下恢复队伍所有人少量 20SP的咖喱。\n6\t咖啡的精髓★\t可以制作为我方1名伙伴恢复大量 100SP的咖啡。\n9\t卢布朗咖喱的要领\t可以制作制作在非战斗情况下恢复队伍所有人中量 50SP的咖喱。,\n10\t卢布朗咖喱的精髓★\t可以制作制作在非战斗情况下恢复队伍所有人大量 100SP的咖喱。解锁人格面具黄龙\n        ",
                    title: "佐仓惣治郎",
                    type: "coopzczzl",
                    text: "\n人格指数开启的RANK限制：\n    7级：体贴 Rank Max\n\t",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/d/d5/kywz0h11rc0ioeykpls0k8rl0ds5tdh.png/60px-P5R_%E4%BD%90%E4%BB%93%E6%83%A3%E6%B2%BB%E9%83%8E%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t自制速愈药★\t贩售的恢复类药品种类增加了。\n3\t自制灭菌药★\t贩售的恢复类药品中,追加了辅助效果药品。\n5\t自制预防药★\t贩售的辅助效果药品种类增加了。\n7\t打折优惠\t在诊所贩售的道具售价打折。,\n10\t自制复活药★\t贩售的复活类药品种类增加了。解锁人格面具爱丽丝\n        ",
                    title: "武见妙",
                    type: "coopwjm",
                    text: "\n人格指数开启的RANK限制：\n    2级：勇气 Rank 2\n    8级：魅力 Rank Max\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/5/5e/sswyuvro5epqwjuod62rp20oqj22udf.png/60px-P5R_%E6%AD%A6%E8%A7%81%E5%A6%99%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t运子帷幄★\t主人公行动时,可将待命队员与战斗队员替换。\n3\t打入\t可以在主人公使敌人倒地的时候,让待命队员进行追击。\n5\t围崩\t在危机遇敌的时候也可以逃走。\n7\t成金\t进入先制遇敌之后,可在我方回合内结束战斗的话,战斗的报酬金额变成2倍。\n9\t投子★\t逃走所需回合数变成零,可以立刻逃走。,\n10\t东乡系统\t在伙伴行动时,能够让行动的伙伴和待命队员进行交换。解锁人格面具路西法\n        ",
                    title: "东乡一二三",
                    type: "coopdxyes",
                    text: "\n人格指数开启的RANK限制：\n    解禁：魅力 Rank 3\n    8级：知识 Rank Max\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/9/9c/5ojzf2fk8ff7fkzo2fkrp6d8vrrqubl.png/60px-P5R_%E4%B8%9C%E4%B9%A1%E4%B8%80%E4%BA%8C%E4%B8%89%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n2\t交涉术★\t在对话交涉中,要求金钱与道具时有机会可以再追加要求。\n3\t募集经费★\t在对话交涉中,有特定几率可以要求更多的金钱。\n5\t印象操作术★\t在对话交涉中,提升敌人交出稀有道具的机率。\n8\t人心掌握术★\t在对话交涉中,必定能说服阴影成为人格面具加入我方。,\n10\t魅力演讲术★\t在对话交涉中,能将比自己等级高的阴影收服为自己的人格面具。解锁人格面具阿修罗\n        ",
                    title: "吉田寅之助",
                    type: "coopjtyzz",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/9/92/1fkgcgf7jplobbmvs98e53ny833zbcs.png/60px-P5R_%E5%90%89%E7%94%B0%E5%AF%85%E4%B9%8B%E5%8A%A9%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t混水摸鱼★\t可在川上上课时不专心听讲,把时间用来磨炼自我。具体时间为 6.3、7.2、9.23、10.5、11.5的上课期间\n3\t家事代理\t可委托川上,请她代为处理『泡咖啡』和『去投币式洗衣店洗衣服』。需要5000块 Rank 9以上 免费\n5\t彻底混水摸鱼\t藉由川上干扰其他老师上课,让可以不专心听讲的课程变多。增加时间段 6.16、6.25、9.30、10.31、11.11、11.16、1.20、1.25\n6\t超级家事代理\t『制作潜入道具』『制作咖喱』也可以委托川上代为处理。需要5000块 Rank 9以上 免费,\n10\t特别按摩★\t从异世界回来后,只要委托川上进行按摩,再累的夜晚也都可以外出。解锁人格面具阿尔达\n        ",
                    title: "川上贞代",
                    type: "coopcszd",
                    text: "\n人格指数开启的RANK限制：\n    解禁：勇气 Rank 3\n                    ",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/0/0a/10eegmnyfdlvh7ccva0rga357iclmh6.png/60px-P5R_%E5%B7%9D%E4%B8%8A%E8%B4%9E%E4%BB%A3%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t开运占卜★\t5000块 当日限定 可进行提高指定的人格指数1.5倍加算率的占卜 。\n3\t财运占卜★\t5000块 当日限定 可进行再战斗中透过总攻击获胜时,2倍报酬金额提升的占卜。\n5\t契合度占卜★\t5000块 当日限定 可进行与制定对象加深羁绊的占卜。当持有命运面具时候，增加的结果得到1.2-1.5倍的修正\n7\t秘法·命运占卜★\t10000块 当日限定可进行能看到指定对象所有协助能力的占卜。\n8\t禁忌·命运占卜\t20000块 可进行让天鹅绒房间的警报立即发生,便于在异世界产生警报的占卜。\n10\t奥义·命运占卜★\t10000块 可进行清楚得知对象心情的占卜。最佳对话选项会呈现红字,解锁人格面具吉祥天\n        ",
                    title: "御船千早",
                    type: "coopycqz",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/9/93/ha7lvol84f2nqqu72l58l7raeb8ki0d.png/60px-P5R_%E5%BE%A1%E8%88%B9%E5%8D%83%E6%97%A9%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t三岛的加油★\t在待命的队员也能得到70%经验值。\n3\t三岛的真心加油\t提高所获得的经验值。一般5%\n5\t三岛的全力加油\t提高在待命的队员所获得的85%经验值。\n7\t怪盗支持者的大声加油★\t大幅提高所获得的的经验值。一般10%,\n10\t救世祈愿★\t让在待命的队员所获得的的经验值与战斗队员一样多。解锁人格面具圣达芬\n        ",
                    title: "三岛由辉",
                    type: "coopsdyh",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/0/0c/kpci97gkthr1umjtpfen1ue567r5bbh.png/60px-P5R_%E4%B8%89%E5%B2%9B%E7%94%B1%E8%BE%89%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t一枪倒地★\t每次潜入时,可发动仅有一次的特殊射击让一只敌人倒地。\n2\t随意开火★\t在先制遇敌时,有特定机率用枪进行总攻击。攻击的伤害如果连续打A按钮，给予阴影的最大HP的25%左右的伤害\n3\t威吓射击★\t对话交涉中,可使用威吓射击,更容易说服人格面具加入。\n5\t洗不掉的污渍★\t在进行觉有附加异常状态的枪攻击时,该攻击的附加状态机率会上升。\n6\t节省射击★\t每次潜入时,可以使用3次『一枪倒地』。\n8\t点击散弹★\t『随意开火』的伤害提高。Rank 2的伤害从25%提升至50%\n10\t织田特殊射击★\t可以让主人公的枪击不受敌人对枪击的抵抗丶无效丶反弹丶吸收效果影响,解锁人格面具摩陀。\n        ",
                    title: "织田信也",
                    type: "coopztxy",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/5/5e/sfkc2mbe523elnhfo1rfbp0iuri8tzt.png/60px-P5R_%E7%BB%87%E7%94%B0%E4%BF%A1%E4%B9%9F%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n1\t传闻的独家★\t每次找到新的安全小屋警戒度就会降低。\n3\t冲击的独家★\t警戒度比较不容易上升,在不被敌人发现下遇敌还胜利的话可以降低更多的警戒度。\n5\t前所未有的独家\t刚开始潜入殿堂时,能够以警戒度较低的状态下探索。\n7\t颤栗的独家★\t殿堂的警戒度几乎不会提升，到了第二天后就能变成0,\n10\t传说的独家★\t不论警戒度高低,都能容易先制遇敌。解锁人格面具别西卜\n        ",
                    title: "大宅一子",
                    type: "coopdzyz",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/3/30/la57dp31wxo3lc8209gl887n2mmjmor.png/60px-P5R_%E5%A4%A7%E5%AE%85%E4%B8%80%E5%AD%90%E5%A4%B4%E5%83%8F.png",
                },
                {
                    table: "\n          RANK\t解锁技能名称\t效果\n2\t心灵排毒·X\t当主人公陷入异常状态,有机会可以立即恢复正常。\n3\t莲心镜\t战斗开始时,主人公有机会获得蓄力及专心致志的效果。\n5\t正念疗法\t在主人公消耗SP时,主人公自身的SP有机会自动恢复。\n7\t速效心流\t『莲心镜』发动的机率有所提升。\n9\t心灵排毒·DX\t『心灵排毒·X』发动的机率有所提升,\nMax\t清醒疗法\t提升Rank 5效果增强，提升SP的回复量\n解锁\t合成解锁\t解锁人格面具瓦胡·马纳\n        ",
                    title: "丸喜拓人",
                    type: "coopwxtr",
                    text: "",
                    image: "https://patchwiki.biligame.com/images/persona/thumb/f/fc/0hqjzp7xf9fstjus6d1584vcd5qw4xk.png/60px-P5R_%E4%B8%B8%E5%96%9C%E6%8B%93%E4%BA%BA%E5%A4%B4%E5%83%8F.png",
                },
            ],
        },
        {
            title: "COOP 优先级推荐",
            type: "cooprecommonad",
            image: "http://littlering.cn/persona5/static/strategy/strategy_coop_intro.png",
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
        COOP Rank 7解锁技能名称技能瞬杀，可以在异世界撞死低于自己10级的怪，每次新周目第一个开满，用了都说好！
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
        {},
    ];
    const res2 = <StrategyMainData[]>[
        {
            title: "解答猜谜",
            type: "answer",
            image: "http://littlering.cn/persona5/static/strategy/strategy_coop_intro.png",
            content: [
                {
                    table: "日期\t正确答案\n4月12日\t坏人\n4月19日\t两边一样长\n4月23日\t全部\n4月25日\t确实是错误还发起行动/确信是正确的而采取行动\n4月27日\t四色定理\n4月30日\t人/才能/优秀的人\n5月7日\t命运之女\n5月10日\t平安时代\n5月11日考试\t源义经/源赖朝/赖朝赢了/弱者\n5月12日考试\t认知/两个都是\n5月13日考试\t恶魔辞典/致命女郎\n5月16日\t安慰剂效应\n5月19日\t葛饰北斋\n5月21日\t1:1.414\n5月23日\t共同的/感觉/联觉\n5月26日\t柯南·道尔\n5月31日\t约翰·席尔瓦\n6月4日\t晕轮效应\n6月7日\t脚的数量\n6月8日\t20世纪\n6月13日\t绿色\n6月15日\t硬币\n6月20日\t智能手机\n6月23日\t教皇\n6月27日\t狗\n6月29日\t金\n7月1日\t蛮头\n7月4日\t尤里乌斯和奥古斯都\n7月7日\t银河/素面\n7月9日\t三角形\n7月11日\t能长期记住的记忆/近乎无限/不会遗忘\n7月12日\t偷窃\n7月13日考试\t64度/诸葛亮/人头/人头的替代品\n7月14日考试\t堪察加拟石蟹·石蟹科/经济混乱\n7月15日考试\t下猫下狗/鬼的肠子\n9月3日\t繁荣\n9月6日\t停表错觉\n9月14日\t租赁店\n9月17日\t有能力的老鹰都会藏起自己的爪子\n9月21日\t正中央\n9月24日\t白20面,黑12面\n9月28日\tPhantom/Vibration/Syndrome\n9月29日\t宫内厅\n10月3日\t星星\n10月6日\t约瑟夫·吉约丹\n10月11日\t波巴\n10月17日考试\t32面/以前只有一种颜色/以前是黑白的\n10月18日考试\t夏尔·亨利·桑松/因为是世袭制\n10月19日考试\t强制劳动/欧洲大陆的3只蜜蜂\n10月22日\t15\n10月24日\t主观认定\n11月2日\t江户时代\n11月4日\t剑\n11月8日\t几岁都可以\n11月10日\t因为很难看到它的眼睛\n11月12日\t因为声音是合成的\n11月14日\t因为海拔很高\n11月15日\t斩首示众\n11月17日\t蜗牛线\n12月20日考试\tD/10亿以上/斩首并游街示众/是一种表演\n12月21日考试\t红心/旁听\n12月22日考试\t日本/『无畏』号战列舰\n1月11日\t八百万/YAOYOROZU\n1月14日\t岩手县\n1月18日\t准备就绪\n1月21日\t蛇\n1月24日\t我的手机/用光/我的手机没电了\n1月27日\t可以传给朋友的朋友的朋友\n",
                    title: "课堂问答",
                    type: "ansclass",
                    text: "",
                },
                {
                    table: "序号\t时间\t问题\t答案\n1\t4月18日\t一种培养人才的方式\t全日制教育\n2\t4月27日\t春季的一种户外活动\t看樱花\n3\t5月2日\t旅游的人会变多的时期\t五一黄金周假期\n4\t5月10日\t精神上的一种症状\t多重人格障碍\n5\t5月18日\t体现当今时尚的展出\t当代艺术展\n6\t5月26日\t会引起不适的症状\t过敏性鼻炎\n7\t5月31日\t江户川时期的画家\t葛饰北斋\n8\t6月3日\t做人的道德准则\t仁义礼智信\n9\t6月7日\t一种重要的对外宣传方式\t专题新闻发布会\n10\t6月16日\t为大众提供的一种有偿服务\t自助洗衣房\n11\t6月22日\t可以放进去，也能拿出来\t自动取款机\n12\t6月30日\t描写某特定时节的诗句\t黄梅时节家家雨\n13\t7月7日\t效果非常好\t药到病除\n14\t7月12日\t学生参加的一种活动\t暑期夏令营\n15\t7月19日\t改变命运的标准\t录取分数线\n16\t7月27日\t一种美丽演出\t放烟花\n17\t8月3日\t物理定律\t牛顿第一运动定律\n18\t8月8日\t从晚上的娱乐活动变成了比赛\t扔枕头大战\n19\t8月17日\t一种化妆品\t防晒霜\n20\t8月25日\t体现处理事情的态度\t临时抱佛脚\n21\t8月30日\t古代看得到，现代看不到\t特洛伊木马\n22\t9月2日\t有向左转的，也有向右转的\t热带气旋\n23\t9月19日\t一种传统节日活动\t中秋赏月\n24\t9月28日\t上上下下\t纳斯达克指数\n25\t10月6日\t一种颜色染料\t普鲁士蓝\n26\t10月10日\t一种节日装饰\t杰克南瓜灯\n27\t10月31日\t学生精神生活的重要组成部分\t课外活动\n28\t11月4日\t某领域的重要奖项\t普利策新闻奖\n29\t11月14日\t一种心理学范畴\t从众行为心理学\n30\t11月28日\t某种个人吸引力\t领袖魅力\n31\t12月2日\t一传十，十传百\t季节性大流感\n32\t12月7日\t对某种命运有所概括的一句话\t大难不死必有后福\n33\t12月12日\t公民的基本权利\t被选举权\n34\t12月19日\t特殊景象造就的特殊节日\t白色圣诞节\n35\t1月14日\t一种网站购物功能\t心愿单\n36\t1月19日\t希腊神话中的一位神\t赫马佛洛狄忒斯\n37\t1月23日\t神话中登场的神器\t冈格尼尔\n38\t1月27日\t一种传说中的妖怪\t千年九尾狐狸精\n",
                    title: "填字游戏",
                    type: "ansfillword",
                    text: "",
                },
                {
                    table: "日期\t提问\t正确答案\n05月 19日\t殴打他人致其受伤即可认定为『伤害罪』。那么以下情况呢，哪个会构成伤害罪\tB.制造噪音导致别人神经衰弱 \n05月 26日\t因鸭志田先生事件而受到关注的『坦白』……自古以来就被称为『证据的○○』。 下列正确的是哪个选项！\tA.坦白是证据的『女王』 \n06月 02日\t在少年犯罪中经常听到的『保护观察』，是一个帮助犯下错误的人更生的制度…… 那么，下列正确的是哪个！\tB.监护人不会获得薪水 \n06月 23日\t那位斑目先生坦白的『诈骗罪』衍生出了，被认为是难以立案的犯罪这一问题…… 下列哪一个选项，犯下了诈骗罪！\tB.明明身无分文却去餐厅吃饭 \n08月 04日\t闯空门或扒窃会犯下『盗窃罪』，那么以下情况呢？ 会犯下『盗窃罪』的……是哪一个选项！\tB.擅自使用别人的车后返还了 \n09月 22日\t保证劳动者权益『劳动基本法』中，规定了 对于违反者的处罚方式。在其中最为严重的事违反『禁止强制劳动』。该罪名的刑罚是哪一种！？\tA.十年监禁 \n09月 29日\t信息化社会的陷阱……哪怕只是不经意的行为也可能会是犯罪！？ 会犯 下『损害名誉罪』的……是哪个！\tA.四处散播他人过去犯过的罪 \n11月 10日\t下一个问题非常简单……这个国家最伟大的人是谁？ 顺便一提……这个节目是『法律综艺节目』，那么，请选出你认为比较『伟大』的那一个！\tB.坐在电视机前的你 \n11月 24日\t在国会是以议员『多数表决』来决定事物的，但如果赞成和反对的票数相同又该怎么办?\tA.由议长来决定 \n12月 08日\t因为想要杀死对方而开枪，但没有打中，反而误伤了其他的路人。 这种情况下，开枪的犯人会适用于什么样的罪名？那么，正确的是哪个！\tA.杀人未遂 \n12月 15日\t今天是关于刑警电视剧里经常听到的『自首』的问题。 那么，正确的是哪个！\tB.通缉犯不能自首 \n\n",
                    title: "电视猜谜",
                    type: "anstv",
                    text: "",
                },
            ],
        },
    ];
    const res3 = <StrategyMainData[]>[
        {
            title: "人格指数指南介绍",
            type: "cftintro",
            image: "http://littlering.cn/persona5/static/strategy/strategy_coop_personality.png",
            content: [
                {
                    title: "五维人格指数简介",
                    type: "cftbrintro",
                    text: `
        主角的属性共分为知识、勇气、灵巧、体贴与魅力，通过特定的行为可以令其上升。并且人格指数还将影响打工挑战以及推进COOP剧情发展，所以合理的计划增加五维在一周目是非常重要的！
        涉及人格指数的解禁COOP参见COOP攻略。
        `,
                },
                {
                    title: "人格指数提升方法",
                    type: "cftupmethod",
                    text: `
        人格指数提升会收各种行动影响，其中根据行动的不同特殊的维度值会增加。
        ※注1 游戏中人格指数加成会以“♪”呈现，但是对应具体数值是：
                “♪”：2 点
                “♪♪”：3 点
                “♪♪♪”：5点及五点以上
        ※注2 有关开运占卜增加人格指数的一些补充说明：开运占卜的1.5倍加成，采取的是去尾法，例如：5×1.5=7.5 则会增长7点值。
        
        人格指数增加的主要要素
                恶劣天气时候学习：比如暴雨
                考试中取得好成绩
                在特别日子打工，并且选对选项
                读了书「震撼人心的摄影技巧」「「因数分解学习法」
                新宿 开运占卜：不会消耗时间 需要御船千早 COOP Rank 1
        `,
                },
                {
                    title: "人格指数等级",
                    type: "cftlevel",
                    text: "",
                    table: "Rank\t人格指数维度\t人格指数等级\t内部值\n1\t知识\t才疏学浅\t0~33\n2\t知识\t勤奋好学\t34~81\n3\t知识\t知识分子\t82~125\n4\t知识\t博学多闻\t126~191\n5\t知识\t百科字典\t192以上\n\t\t\t\n1\t勇气\t胆小多疑\t0~10\n2\t勇气\t独当一面\t11~37\n3\t勇气\t不屈不挠\t38~67\n4\t勇气\t大胆无畏\t68~112\n5\t勇气\t狮王之心\t113以上\n\t\t\t\n1\t灵巧\t笨手笨脚\t0~11\n2\t灵巧\t普普通通\t12~33\n3\t灵巧\t专业职人\t34~59\n4\t灵巧\t大师手艺\t60~86\n5\t灵巧\t点石成金\t87以上\n\t\t\t\n1\t体贴\t不甚关心\t0~13\n2\t体贴\t倾听高手\t14~43\n3\t体贴\t善解人意\t44~90\n4\t体贴\t乐于助人\t91~135\n5\t体贴\t圣母慈爱\t136以上\n\t\t\t\n1\t魅力\t一般程度\t0~5\n2\t魅力\t令人在意\t6~51\n3\t魅力\t潜力十足\t52~91\n4\t魅力\t魅力洋溢\t92~131\n5\t魅力\t超凡脱俗\t132以上",
                },
            ],
        },
        {
            title: "人格指数提升细则",
            type: "cftupdetail",
            image: "http://littlering.cn/persona5/static/strategy/strategy_coop_personality.png",
            content: [
                {
                    title: "知识",
                    type: "cftknowledge",
                    text: "",
                    table: "要素·行动\t人格指数提升\t备注\nCoop「星」·等级提升剧情\t2\tRank→1、2、3、5、6、7、8\n课堂上·问题回答正确\t2\t共50次\n课堂上·认真上课\t2\t※ 仅限 5.6当日\n上课偷懒·学习\t3\t\n学校图书馆·学习\t2、5\t※ 截止5.6\\seq2点：好天气时、5点：恶劣天气时\n学校图书馆·学习\t3、5、7\t※ 5.6之后\\seq3点：好天气时、5点：恶劣天气时或“因数分解的学习法”读完后的好天气时、7点：“因数分解的学习法”读完后的恶劣天气时的上升量\n四轩茶屋·学习\t3、5、7\t\n四轩茶屋·纵横填字\t2\t\n四轩茶屋·电视猜谜\t2\t※ 首次回答正确\n涩谷·大汉堡店\t2、3、5 \t※ 巨无霸挑战成功\\seq※根据挑战项目加成不同2点：彗星级3点：重力级5点：宇宙塔级\n涩谷·家庭餐厅学习\t2、3、4、5\t2点：好天气时、3点：恶劣天气时。“因数分解的学习法”读完后额外增加2点\n新宿酒吧·接待红着脸的上班族\t2\t\n吉祥寺·飞镖和台球\t3\t※ 是否上升是随机的\n地下商场·饮用鱼介青汁\t2\t※ 青汁每周日刷新，按照美肌（魅力）、活性（灵巧）、极苦（勇气）、温泉（体贴）、鱼贝（知识）的顺序变化。如有错过，则本周的青汁顺延至下一周。\n吉祥寺·「介绍所」听介绍\t\t※ 仅限第一次\n读书：「大怪盗·亚森」（2回）\t读完后5\t需读两次\n读书：「梅吉多的威胁」（2回）\t读完后5\t5.6之后进货 需读两次\n读书：「极译・贤人们的物语」（2回）\t读完后5\t6.1之后进货 需读两次\n读书：「现代社会思考考察」（2回）\t读完后7\t知识Rank 2 需读两次\n读书：「伟人异闻录」（3回）\t读完后7\t需读三次\n新宿·电影鉴赏\t5、7 ※3\t8~9月\\seq初次基础5点，之后基础2点读了震撼人心的摄影技巧额外加2点\n四轩茶屋·电影鉴赏\t5、7 ※3\t10月\\seq初次基础5点，之后基础2点读了震撼人心的摄影技巧额外加2点\n电子游戏·追踪翔羽侠\t3\t\n考试复习：接受同伴们的邀请\t5\t5.9 5.10 7.11 10.14 10.15 10.16\n做梦\t2\t※ 是否上升是随机的\\seq攻略新岛殿堂之外随机发生\n",
                },
                {
                    title: "勇气",
                    type: "cftcourage",
                    text: "",
                    table: "要素·行动\t人格指数提升\t备注\nCoop「死神」等级提升剧情\t2\tRank 1~8\n读书：「传说中的灵异体验」\t读完后5\t7.1 进货\n读书：「携弓者」\t读完后5\t图书馆借书 ※明智加入后10.30\n读书：「海盗传说」\t读完后5\t\n读书：「传奇侠盗」\t读完后5\t祐介加入后\n读书：「克苏鲁的叹息」\t读完后5\t双葉加入后\n读书：「剑豪武勇谈」\t读完后7\t\nDVD鉴赏：X文件夹\t3、5 ※3\t※3 初次基础5点，之后基础2点\nDVD鉴赏：奔尸路\t3、5 ※3\t※3 初次基础5点，之后基础2点\nDVD鉴赏：24拖稿任务\t3、5 ※3\t※3 初次基础5点，之后基础2点\n游玩电视游戏：星战佛钮司\t成功时：3\t每次游玩都增加 6.5进货\n游玩电视游戏：星战佛钮司\t失败时：2\t\n游玩电视游戏：豪血寺一味\t成功时：3\t每次游玩都增加\n游玩电视游戏：豪血寺一味\t失败时：2\t\n涩谷·电影鉴赏：背心亿万富翁\t5、7 ※3\t4月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n新宿·电影鉴赏：零时胜负\t5、7 ※3\t6、7月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n新宿·电影鉴赏：ZAW\t5、7 ※3\t11、12月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n四轩茶屋·电影鉴赏：毅力之圣诞节快乐\t5、7 ※3\t12月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n新宿·电影鉴赏：战斗烤肉\t5、7 ※3\t次年1月~最后 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n学校图书馆·学习\t2\t※ 截止5.6 好天气时\n四轩茶屋·澡堂\t2\t恶劣天气 泡澡过头\n卢布朗·制作咖喱\t2\t教皇Rank4之后(周日、周一、周三、周五)\n假日活动·和龙司在自己房间玩\t5\t7.28、8.13\n假日活动·和双叶在自己房间游玩电视游戏\t5\t9.25\n吉祥寺·在白天的时候坐在\t2\t※仅限一次『家具店』的沙发上坐一整天\n吉祥寺·『甜甜圈店』\t2\t※仅限一次在夜晚的时候调查\n教室·的黑板上画上怪盗团的标记\t2\t※仅限一次 10.31之后\n秋叶原·女仆咖啡店喝茶\t2\t克拉拉的剧情中：选择「重做」\n做梦\t2\t※ 是否上升是随机的 攻略新岛殿堂之外随机发生\n在家庭餐厅点热咖啡\t2\t\n新宿的酒吧·在特别的日子打工\t3\t和可怕的大叔聊天\n完成宇宙汉堡的大爆炸挑战\t彗星级：2\t失败了也会增加\n完成宇宙汉堡的大爆炸挑战\t重力级：3\t\n完成宇宙汉堡的大爆炸挑战\t宇宙塔级：5\t\n饮用极苦青汁\t2\t周日出售\n",
                },
                {
                    title: "灵巧",
                    type: "cftproficiency",
                    text: "",
                    table: "要素·行动\t人格指数提升\t备注\nCoop「倒悬者」等级提升剧情\t3\tRank→2、3、4、5、8\n在上课偷懒的时候制作潜入道具\t3\t\n制作潜入道具\t3、5\t偶尔上升5\n读书：「暗中活跃的女人」\t读完后5\t图书馆借书 ※春加入后9.19\n读书：「身心舒畅收纳法」\t读完后5\t图书馆借书 ※春加入后9.19\n读书：「机械解析新书」\t读完后7\t神保町书店 ※｢剑豪武勇谈｣读完后\nDVD鉴赏：百战天王\t3、5 ※3\t读了震撼人心的摄影技巧额外加2点\nDVD鉴赏：逃狱风暴\t3、5 ※3\t6.1之后\\seq 读了震撼人心的摄影技巧额外加2点\nDVD鉴赏：欢乐高球团\t3、5 ※3\t8.1之后\\seq 读了震撼人心的摄影技巧额外加2点\n游玩电视游戏：高尔夫玩童猿田彦\t3\t秋叶原怀旧游戏店・超男爵・9.1以后\n涩谷·电影鉴赏\t5、7 ※3\t10～11月 ※3 初次基础5点，之后基础2点\\seq 读了震撼人心的摄影技巧额外加2点\n在牛丼店打工\t通常时：3、5\t发生剧情的话，根据正确的数量提升2～5\n击球中心·击球\t成功击中1～4个：2\t\n击球中心·击球\t猛打奖：3\t\n钓鱼\t2\t成功钓一条以上\n修理笔记本电脑\t5\t※仅限一次\n假日活动：和双叶在自己的房间里阅读杂志\t5\t※10.10\n做梦\t2\t攻略金城殿堂时随机发生\n家庭餐厅·点图腾柱\t2\t9.28之后\n新宿的酒吧·在特别的日子打工在\t3\t和黑衣OL聊天\n成功完成宇宙汉堡的大爆炸挑战\t彗星级：2\\seq重力级：3\\seq宇宙塔级：5\t\n吉祥寺·飞镖和台球\t2、4、5\t※根据飞镖的成绩上升量变化\\seq台球提升随机\n饮用活性青汁\t2\t仅在周日出售\n",
                },
                {
                    title: "体贴",
                    type: "cftkindness",
                    text: "",
                    table: "要素·行动\t人格指数提升\t备注\nCoop「法王」等级提升剧情\t5\tRank2、4、5、6\nCoop「塔」等级提升剧情\t5\tRank 1~6、8~10\n在自己房间里照顾观叶植物\t2、3、5\t分别对应使用园艺肥料、植物营养剂、天然･植物营养剂\n在花店打工\t3、5\t通常时3，大成功时5\n读书：大盗·苏洛\t读完后5\t图书馆借书 ※春加入后9.19\n读书：梦幻的女教皇\t读完后5\t图书馆借书 ※真加入后6.21\n读书：忠犬斑公\t读完后5\t涩谷太平堂书店\n读书：叫我首领\t读完后7\t神保町书店 ※｢剑豪武勇谈｣读完后\nDVD鉴赏：第七感生死爱\t3、5 ※3\t每次观看都增加\nDVD鉴赏：急诊室的阴天\t3、5 ※3\t每次观看都增加6/1进货\nDVD鉴赏：怪医毛斯\t3、5 ※3\t每次观看都增加8/1进货\n游玩电视游戏：垢太郎鉄道\t3\t秋叶原怀旧游戏店・超男爵・9.1以后\n涩谷·电影鉴赏\t5、7 ※3\t5～6月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n涩谷·电影鉴赏\t5、7 ※3\t8～9月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n四轩茶屋·电影鉴\t5、7 ※3\t9月、2月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n新宿·电影鉴赏\t5、7 ※3\t10月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n四轩茶屋·电影鉴赏\t5、7 ※3\t11月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n涩谷·电影鉴赏\t5、7 ※3\t12月 ※3 初次基础5点，之后基础2点\\seq读了震撼人心的摄影技巧额外加2点\n秋叶原·女仆咖啡店喝茶\t2\t克拉拉的剧情中：选择「原谅」\n在家庭餐厅·奶奶汉堡排\t2\t\n新宿的酒吧·在特别的日子打工在\t3\t和低着头的女兴聊天\n在咖啡厅打扫\t2\t\n给观叶植物施肥\t2\t\n饮用温泉青汁\t2\t仅在周日出售\n假日活动：和龙司看电影\t5\t5.29\n",
                },
                {
                    title: "魅力",
                    type: "cftcharm",
                    text: "",
                    table: "要素·行动\t人格指数提升\t备注\nCoop「太阳」等级提升剧情\t3\tRank 2、4、5、7\\seq5Rank8、10\nCoop「恶魔」等级提升剧情\t3\tRank 1、2、3、4、7、8\n在课堂上正确回答问题\t2\t指名杏 4.25、6.20、7.7\n泡澡堂：通常\t3、5\t通常3，周日或者雨天5\n读书：艳丽的舞娘\t读完后5\t图书馆借书\n读书：灰姑娘童话\t读完后5\t图书馆借书 ※10.4\n读书：魅惑的交谈术\t读完后5\t涩谷太平堂书店\n读书：美男蛮勇录\t读完后7\t神保町书店 ※｢剑豪武勇谈｣读完后\nDVD鉴赏：飞跃彼此利\t3\t每次观看都增加\nDVD鉴赏：饿女贝蒂\t3\t6.1之后\nDVD鉴赏：激情师奶\t3\t8.1之后\n游玩电视游戏：招摇撞骗的五右卫门\t2、3\t失败加2，成功加3\n游玩电视游戏：神拳de痛击\t3\t每次游玩都增加秋叶原怀旧游戏店・超男爵・9.1以后\n涩谷·电影鉴赏\t5、7 ※3\t7月 ※3 初次基础5点，之后基础2点\n读了震撼人心的摄影技巧额外加2点\n涩谷·电影鉴赏\t5、7 ※3\t1月~最后 ※3 初次基础5点，之后基础2点\n读了震撼人心的摄影技巧额外加2点\n在咖啡店里泡咖啡\t2\t教皇Rank2之后\n上课躲粉笔\t3\t成功率根据灵巧值而发生变动\n定期考试\t3、5\t中等偏上 +3\\seq年级前10或第一 +5\n假日活动：和祐介在自己房间里看书\t5\t7.27\n假日活动：和祐介在自己房间里看DVD\t5\t8.8、8.11\n假日活动：和龙司在自己房间里看DVD\t5\t8.3\n在便利店打工\t3\t7月1日之后\n在便利店打工并发生事件且成功\t5\t日期里带有7的日子\n在女仆咖啡厅点东西\t3、5\t通常3，特别菜单5\n做梦\t2\t\n在家庭餐厅店气泡水果茶\t2\t7月1日之后\n新宿的酒吧·在特别的日子打工在\t3\t和穿着晚礼服的女性对话\n成功完成宇宙汉堡的大爆炸挑战\t彗星级：2\\seq力级：3\\seq宙塔级：5\t\n饮用美肤青汁\t2\t仅在周日出售\n",
                },
            ],
        },
    ];
    const res4 = <StrategyMainData[]>[
        {
            title: "十艘跳介绍",
            type: "datingintro",
            image: "https://gao7pic.gao7.com/6129d20e-01de-4738-bcf5-80908ebf2ec7.jpg",
            content: [
                {
                    title: "十艘跳简介",
                    type: "datingbrintro",
                    text: '\n\t十艘跳是P5R主人公雨宫莲的后期限定专属技能并且下周目无法继承，效果是在情人节那天对高卷、新岛、佐仓、奥村、芳泽、武见、东乡、川上、御船、大宅等十位女性造十次超特大情感伤害(放鸽子算一次，和自己以外其他九位搞暧昧算九次)但是使用完之后会被总攻击而陷入倒地状态，你可以在本游戏地图中各种地方的商店购买礼物赠送对方和通过花言巧语哄骗来进行强化。\n\t',
                },
            ],
        },
        {
            title: "十艘跳详情",
            type: "datingdetail",
            image: "https://gao7pic.gao7.com/6129d20e-01de-4738-bcf5-80908ebf2ec7.jpg",
            content: [
                {
                    title: "高卷杏",
                    text: "\n\tRank 8→9的时候，在剧情对话中选择「还有我在」\n然后下个选项，两者都可以确定恋人关系！\n\t",
                    type: "datingg-j-x",
                },
                {
                    title: "新岛真",
                    text: "\n\tRank 8→9的时候，在第五个对话中选择「那个人就在这里」第六个对话选择「我喜欢你」\n\t",
                    type: "datingx-d-z",
                },
                {
                    title: "佐仓双叶",
                    text: "\n\tRank 8→9的时候，在第四个对话中选择「因为我喜欢双叶」\n\t",
                    type: "datingz-c-s-y",
                },
                {
                    title: "武见妙",
                    text: "\n\tRank 6→7的时候，最后的选项中选择「要我看几次都行」。\n\tRank 7→8的剧情中，第二个对话选项选择「我在这」\n\t完成支线任务「医生的抗争·失传的疗法」之后，交任务的时候的第三个选项中选择「如果是为了美和的话」。\n\t最后在Rank 8→9的时候，在剧情对话中连续选择「因为我想见妳」「就是喜欢妳」「别岔开话题」。\n\t",
                    type: "datingw-j-m",
                },
                {
                    title: "御船千早",
                    text: "\n\tRank 5→6的时候，第四个对话选项选择「千早就是千早」\n\tRank 7→8的时候，完成支线任务「揭穿！灵能者的花招」。交任务的时候选择「可以」。\n\tRank 8→9的时候，第三个对话选项选择「想见千早」\n\t",
                    type: "datingy-c-q-z",
                },
                {
                    title: "奥村春",
                    text: "\n\tRank 8→9的时候，第四个对话选项选择「我也很喜欢妳」\n\t川上贞代\n\tRank 6→7的剧情中，第二个对话选项选择「给我打消念头」\n\t在Rank 8→9的时候，完成支线任务「苦恼的恩师来自地狱」,然后交任务的时候在剧情对话中选择「希望你能再来」「你没有误会」「是男人和女人」。\n\t",
                    type: "datinga-c-c",
                },
                {
                    title: "东乡一二三",
                    text: "\n\tRank 8→9的时候，在剧情对话中选择「我想永远陪在你身边」「请你和我交往」\n\t",
                    type: "datingd-x-y-e-s",
                },
                {
                    title: "大宅一子",
                    text: "\n\tRank 6→7的剧情中，在第三个对话选项选择「这是大宅的魅力」\n\tRank 7→8的时候，完成支线任务「曝光！蛮横的恶劣上司」之后交任务，在最后的选项中选择「一起去见她吧」\n\t最后，在Rank 8升到9的时候，在剧情对话的第三个问题选择「我不能让你一个人」，之后在第五个问题和第六个问题选择「我当真了」「我喜欢一子」\n\t",
                    type: "datingd-z-y-z",
                },
                {
                    title: "芳泽堇",
                    text: "\n\tRank 8→9的时候，在第七个对话选项选择「我也喜欢堇」\n\t",
                    type: "datingf-z-j",
                },
            ],
        },
    ];
    const res5 = <StrategyMainData[]>[
        {
            title: "地点介绍",
            type: "areaintro",
            image: "https://patchwiki.biligame.com/images/persona/thumb/2/2a/tf139bkddynh8psr97nhz2gkvexbboh.png/1860px-P5R_%E5%85%A8%E8%A1%97%E5%8C%BA_%E5%85%A8%E5%9C%B0%E9%93%81%E8%B7%AF%E7%BA%BF%E5%9B%BE.png",
            content: [
                {
                    title: "地点简介",
                    type: "areabrintro",
                    text: `
        在好感度累积值未满足Rank等级上升条件时，可以与地图上的协助人进行通常活动，前往他们喜爱的、已开放的街区或景点
        和怪盗团成员外出时可在开放的、可选择的目的地中自由确定/和非怪盗团的协助人外出时目的地会按一定的顺序确定。
        当协助Rank达到MAX时，通常活动的限制将被移除。此时，只要是可以和协助人互动的日子，就可以随时前往他们喜欢的、已开放的景点进行活动。
        如果某街区或景点未开放（未解锁、或恶劣天气等），该地点对应的事件不会发生。
        按照优先级顺序，未开放地点的事件将会被跳过，而下一个已开放地点的事件将会优先发生。
        与特定的协助人前往特定的地方，会得到室内装饰品
        `,
                },
                {
                    title: "地点详情",
                    type: "areadetail",
                    text: "",
                    table: "地点名称\t地点位置\t天气限定\t开放条件\n涩谷\t家庭餐厅\\seq健身房\t\t 5月5日故事推进战车\\seqRank4⇒5\\seq恋爱Rank7⇒8\n原宿\t竹之子小路\t雨\t 5月29日与龙司的假日活动(+杏和三岛)\\seq阅读《酷派GIRL》\n吉祥寺\t－\t\t 6月5日故事推进\n吉祥寺\t爵士俱乐部\t\t正义Rank3⇒4\n水道桥\t巨蛋娱乐世界\t雨\t 6月9日故事推进\n赤坂见附\t－\t\t 6月9日故事推进\n新宿\t－\t\t 6月18日故事推进\n神田\t教堂\t\t 暴食宫殿清除后的第二天\\seq接收特定SNS消息后解锁(最快6月25日)\n市谷\t钓场\t\t 7月3日与龙司的假日活动\\seq阅读《钓场推荐指南》\n银座\t高级寿司店\t\t 7月24日故事推进\\seq皇帝Rank6⇒7\\seq太阳Rank6⇒7\n品川\t水族馆\t\t 7月29日与明智的假日活动\\seq阅读《天天水族馆》\n池袋\t天文馆\t\t 7月30日与真的假日活动 \\seq阅读《星空博物馆》\n明治神宫前\t明治神宫(姻缘祈祷)\t雨\t 8月6日与杏的假日活动\\seq阅读《TOKYO神社通》\n神保町\t古书店街(古书店：薙瓜书房)\t雨\t 8月15日与真的假日活动\\seq星星Rank3⇒4\\seq女皇Rank5⇒6\\seq阅读《逛逛古书店》\n三浦海岸\t－\t\t 8月29日故事推进\n秋叶原\t－\t\t 8月31日故事推进\n六本木\t－\t\t 9月15日故事进展\n中野\t商业大楼\t\t 10月9日与双叶的假日活动\\seq阅读《中野散散步》\n埋浜\t戴斯德尼乐园\t雨\t10月11日故事推进\\seq阅读《游乐园向导》\n永田町\t－\t\t 11月22日故事推进\n井之头公园\t划船处\t雨\t 恋爱Rank2⇒3\\seq皇帝Rank3⇒4\\seq月亮Rank5⇒6\\seq死神Rank8⇒9\n荻洼\t热门拉面店\t\t 战车Rank3⇒4\n月岛\t文字烧店\t\t 战车Rank6⇒7\n上野\t美术馆\t\t 皇帝Rank2⇒3 \\seq(如果9月4日前未开放，则会在9月5日早晨自动触发电视新闻)\n浅草押上\t\"晴空塔\\seq仲见世小路\"\t雨\t 星星Rank5⇒6\\seq恋爱Rank6⇒7\\seq阅读《重生的小镇》\n元町中华街\t中华街\t雨\t阅读《中华甜点导航》\n台场海滨公园\t海滨公园\\seq大型摩天轮\"\t雨\t 倒悬者Rank8⇒9\\seq恋爱Rank9⇒10\\seq命运Rank9⇒10\\seq阅读《成熟的约会》\\seq(※雨天白天开放，雨天夜晚不开放)",
                }
            ],
        }
    ];
    let res = <StrategyMainData[]>[];
    if (type === "coop") res = res1;
    else if (type === "answer") res = res2;
    else if (type === "confidant") res = res3;
    else if (type === "dating") res = res4;
    else if (type === "area") res = res5;

    return new Promise<Data<StrategyMainData[]>>((resolve) => {
        resolve({
            code: "200",
            msg: "success",
            result: res,
        });
    });
};
