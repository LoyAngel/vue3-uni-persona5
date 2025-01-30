import { http } from "@/utils/http";
import { Data } from "@/types/http";
import { StrategyMainData } from "@/types/strategy";
/**
 * @Description: 获取首页banner
 * @param {number} distributionSite - banner位置（投放位置，1为首页） 默认为1
 * @return {Promise}
 */

export const getStrategyMainDataAPI = () => {
    const res = <StrategyMainData[]>[
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
                    table: `
          RANK	解锁	简介
2	不良少年交涉	在和敌人的对话交涉决裂时,假如敌人性格『开朗』,就可重新再交涉。
3	追击	在主人公的攻击未能使敌人倒地的情况下,进行追击。
4	隐形冲刺★	就算在异世界奔跑也不容易被敌人发现
6	纸扇恢复★	有机会让状态异常的伙伴恢复正常。
7	瞬杀	在异世界奔跑接近敌人时,能立刻消灭等级比自己低超过9级的阴影。
8	强忍	即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。
9	掩护	在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。
10	觉醒	拥有的人格面具获得最终进化,诞生为神话的诡骗师。学会：极・疾风识破,
        `,
                    title: "坂本龙司",
                    type: "bbls",
                    text: "",
                },
                {
                    table: `
          RANK	解锁	简介
2	女子交涉	在和敌人的对话交涉决裂时,假如敌人性别为女性,就可重新再交涉。
3	追击	在主人公的攻击未能使敌人倒地的情况下,进行追击。
4	色诱术★	让敌人目光集中在自己身上有时会因此而取消行动。
5	假哭★	可以再敌人恐吓我方时,让敌人产生动摇,便要求变得较宽松。
6	纸扇恢复	有机会让状态异常的伙伴恢复正常。
8	强忍	即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。
9	掩护	在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。
10	觉醒	拥有的人格面具获得最终进化,诞生为神话的诡骗师。习得技能：极・冰冻识破,
        `,
                    title: "高卷杏",
                    type: "gjx",
                    text: "",
                },
                {
                    table: `
          RANK	解锁	简介	
1	潜入道具的配方★	潜入道具的初期配方已开放,可以开始制作潜入道具。
3	追击	在主人公的攻击未能使敌人倒地的情况下,进行追击。
4	猫咪交涉	在和敌人的对话交涉决裂时,假如敌人外型是动物类,就可重新再交涉。
5	强夺秘宝★	主人公的近战攻击打中之后,有机会可以从敌人身上获得道具。
6	密藏道具配方	开放所有潜入道具配方。
7	纸伞恢复	有机会让状态异常的伙伴恢复正常。
8	强忍	即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。
9	掩护	在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。
10	超觉醒	拥有的人格面具获得最终进化,诞生为神话的诡骗师。
11	合成解锁	解锁人格面具经津主 习得技能 极·电击识破,
        `,
                    title: "摩尔加纳",
                    type: "mejn",
                    text: "",
                },
                {
                    table: `
          RANK	解锁	效果
1	卡片复制★	可进行技能卡的复制。
3	追击	在主人公的攻击未能使敌人倒地的情况下,进行追击。
4	艺术交涉	在和敌人的对话交涉决裂时,假如敌人数量只有一只,就可重新再交涉。
5	卡片制作★	可制作之前曾描绘过的技能卡。
6	纸扇恢复	有机会让状态异常的伙伴恢复正常。
7	即兴彩绘★	可当场进行『卡片复制』跟『卡片制作』。
8	强忍	即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。
9	掩护	在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。
10	觉醒	拥有的人格面具获得最终进化,诞生为神话的诡骗师。习得技能：极・火焰识破,
        `,
                    title: "喜多川祐介",
                    type: "xdcyj",
                    text: "",
                },
                {
                    table: `
          RANK	解锁	效果
1	阴影微积分★	在分析画面中可以显示敌人拥有的技能以及掉落道具了。
3	黑带交涉	在和敌人的对话交涉决裂时,假如敌人会使用武术,就可重新再交涉。
4	追击	在主人公的攻击未能使敌人倒地的情况下,进行追击。
6	纸扇恢复	有机会让状态异常的伙伴恢复正常。
7	阴影因数分解★	在游标移动到敌人身上时,可以看到是『无效』丶『反弹』还是『吸收』。
8	强忍	即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。
9	掩护	在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。
10	觉醒	拥有的人格面具获得最终进化,诞生为神话的诡骗师。
11	二觉	真二觉 解锁人格面具「西布莉」学会技能：学会：极・念动识破,
        `,
                    title: "新岛真",
                    type: "xdz",
                    text: "",
                },
                {
                    table: `
          RANK	解锁	效果
1	士气支援★	有时会发动卡加系或全体恢复等情报支援类辅助。
2	印象空间搜寻★	在印象空间执行地图切换时,有特定机率让这个楼层的地图全部开放。
4	位置入侵	战斗开始时,有特定机率逆转成HOLD UP状态。
6	动态支援	『士气支援』效果发动时,有一定机率发动蓄力支援或SP恢复。
7	宝物恢复★	结束战斗后,有特定机率让范围内的搜索物件全部恢复。
9	紧急切换	在无法战斗的队员达到两人以上时,会与待命队员进行交换。
10	终极防御	在队员受到会导致无法战斗的伤害时将攻击无效化。
觉醒	拥有的人格面具获得最终进化,诞生为神话的诡骗师。习得技能：宝物探知,
        `,
                    title: "佐仓双叶",
                    type: "zcsy",
                    text: "",
                },
                {
                    table: `
          RANK	解锁	简介
1	栽培蔬菜★	可以和春一起在顶楼的花盆中栽种蔬菜了。
3	追击	在主人公的攻击未能使敌人倒地的情况下,进行追击。
4	上流交涉	在和敌人的对话交涉决裂时,假如敌人有2名以上,就可重新再交涉。
5	品种改良	增加每次栽培蔬菜的收货量。
6	纸扇恢复	有机会让状态异常的伙伴恢复正常。
7	土壤改良★	缩短栽培蔬菜栽种到收获的时间。
8	强忍	即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。
9	掩护	在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。
10	觉醒	春觉醒 习得技能 极・核热识破,
        `,
                    title: "奥村春",
                    type: "acc",
                    text: "",
                },
                {
                    table: `
          RANK	解锁	效果
2	侦探的具眼	战斗开始时,有机会得知1名敌人的其中一项属性耐性。
3	超凡交涉	在和敌人的对话交涉决裂时,假如敌人具有神格,就可重新再交涉。
4	名侦探的慧眼	战斗开始时,有机会得知1名敌人的所有属性耐性。
6	追击	在主人公的攻击未能使敌人倒地的情况下,进行追击。
7	纸扇恢复	有机会让状态异常的伙伴恢复正常。
10	强忍	即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。
掩护	在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。,
        `,
                    title: "明智吾郎",
                    type: "mzwl",
                    text: "",
                },
                {
                    table: `
          RANK	解锁	效果
2	单跳	在殿堂时,可回避危机遇敌。
4	锁链勾绳	可以在殿堂里,在敌人的背后使用勾绳,从较远的位置先制遇敌。
6	追击	在主人公的攻击未能使敌人倒地的情况下,进行追击。
热血运动交涉	在和敌人的对话交涉决裂时,有特定机率可与所有敌人重新再交涉一次。
7	纸扇恢复	有机会让状态异常的伙伴恢复正常。
8	强忍	即便受到超过剩余HP的伤害,也不会进入无法战斗的状态,HP变成1。
9	掩护	在主人公即将遭遇会造成无法战斗的攻击时,跑到身前替其承受伤害。
10	觉醒	拥有的人格面具获得最终进化,诞生为神话的诡骗师。
11	二觉	解锁人格面具马利亚习得技能 极·咒怨识破,
        `,
                    title: "芳泽霞",
                    type: "fzx",
                    text: "",
                },
                {
                    table: `
          RANK		效果
1	不羁交涉	HOLD UP时选择对话,和阴影进行对话交涉。
阿尔卡那爆发	进行人格面具合体的时候,可以根据每种阿尔卡那各自的协助级别获得对应的经验值。
2	第三只眼	按下L2按钮,就能看到平时看不到的东西。
3	强力容器	人格面具拥有格增加到8格。
5	超级容器	人格面具拥有格增加到10格。
6	阿尔卡那超级爆发	执行人格面具合体时,『阿尔卡那爆发』的经验值奖励增加。
8	究极容器	人格面具拥有格增加到12格。
11	合成解锁	执行人格面具合体时,『阿尔卡那爆发』的经验值奖励增加更多,
        `,
                    title: "伊格尔",
                    type: "yge",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	集体断头台★	将3个以上的人格面具合体,制造强力的人格面具。
3	隔离监禁★	在天鹅绒房间入狱一定天数后,人格面具将学会耐性技能。
5	特别处分★	支付额外的金钱,可以合体出超过主人公等级的人格面具。
8	断头台强化★	增加了『集体断头台』的合体组合模式。,
        `,
                    title: "双子",
                    type: "sz",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	初级枪械改造★	进行枪械改造,可以强化性能。
3	迷彩枪械改造★	可进行附加异常状态的『迷彩改造』。
5	降价	减低枪械改造所需花费的金额。
7	上级枪械改造★	枪械的改造零件种类变多。
10	无价之宝★	可免费进行枪械改造。解锁人格面具阿提斯

,
        `,
                    title: "岩井宗久",
                    type: "yjzj",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
2	咖喱小知识	可以制作为我方1名伙伴恢复少量SP的咖啡。
4	卢布朗咖喱的食谱	可以制作制作在非战斗情况下恢复队伍所有人少量 20SP的咖喱。
6	咖啡的精髓★	可以制作为我方1名伙伴恢复大量 100SP的咖啡。
9	卢布朗咖喱的要领	可以制作制作在非战斗情况下恢复队伍所有人中量 50SP的咖喱。,
        `,
                    title: "佐仓惣治郎",
                    type: "zczzl",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	自制速愈药★	贩售的恢复类药品种类增加了。
3	自制灭菌药★	贩售的恢复类药品中,追加了辅助效果药品。
5	自制预防药★	贩售的辅助效果药品种类增加了。
7	打折优惠	在诊所贩售的道具售价打折。,
        `,
                    title: "武见妙",
                    type: "wjm",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	运子帷幄★	主人公行动时,可将待命队员与战斗队员替换。
3	打入	可以在主人公使敌人倒地的时候,让待命队员进行追击。
5	围崩	在危机遇敌的时候也可以逃走。
7	成金	进入先制遇敌之后,可在我方回合内结束战斗的话,战斗的报酬金额变成2倍。
9	投子★	逃走所需回合数变成零,可以立刻逃走。,
        `,
                    title: "东乡一二三",
                    type: "dxyes",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
2	交涉术★	在对话交涉中,要求金钱与道具时有机会可以再追加要求。
3	募集经费★	在对话交涉中,有特定几率可以要求更多的金钱。
5	印象操作术★	在对话交涉中,提升敌人交出稀有道具的机率。
8	人心掌握术★	在对话交涉中,必定能说服阴影成为人格面具加入我方。,
        `,
                    title: "吉田寅之助",
                    type: "jtyzz",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	混水摸鱼★	可在川上上课时不专心听讲,把时间用来磨炼自我。
具体时间为 6.3、7.2、9.23、10.5、11.5的上课期间
3	家事代理	可委托川上,请她代为处理『泡咖啡』和『去投币式洗衣店洗衣服』。
需要5000块 Rank 9以上 免费
5	彻底混水摸鱼	藉由川上干扰其他老师上课,让可以不专心听讲的课程变多。
增加时间段 6.16、6.25、9.30、10.31、11.11、11.16、1.20、1.25
6	超级家事代理	『制作潜入道具』『制作咖喱』也可以委托川上代为处理。
需要5000块 Rank 9以上 免费,
        `,
                    title: "川上贞代",
                    type: "cszd",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	开运占卜★	5000块 当日限定 可进行提高指定的人格指数1.5倍加算率的占卜 。
3	财运占卜★	5000块 当日限定 可进行再战斗中透过总攻击获胜时,2倍报酬金额提升的占卜。
5	契合度占卜★	5000块 当日限定 可进行与制定对象加深羁绊的占卜。
当持有命运面具时候，增加的结果得到1.2-1.5倍的修正
7	秘法·命运占卜★	10000块 当日限定可进行能看到指定对象所有协助能力的占卜。
8	禁忌·命运占卜	20000块 可进行让天鹅绒房间的警报立即发生,便于在异世界产生警报的占卜。
10	奥义·命运占卜★	10000块 可进行清楚得知对象心情的占卜。最佳对话选项会呈现红字,
        `,
                    title: "御船千早",
                    type: "ycqz",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	三岛的加油★	在待命的队员也能得到70%经验值。
3	三岛的真心加油	提高所获得的经验值。一般5%
5	三岛的全力加油	提高在待命的队员所获得的85%经验值。
7	怪盗支持者的大声加油★	大幅提高所获得的的经验值。一般10%,
        `,
                    title: "三岛由辉",
                    type: "sdyh",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	一枪倒地★	每次潜入时,可发动仅有一次的特殊射击让一只敌人倒地。
2	随意开火★	在先制遇敌时,有特定机率用枪进行总攻击。
攻击的伤害如果连续打A按钮，给予阴影的最大HP的25%左右的伤害
3	威吓射击★	对话交涉中,可使用威吓射击,更容易说服人格面具加入。
5	洗不掉的污渍★	在进行觉有附加异常状态的枪攻击时,该攻击的附加状态机率会上升。
6	节省射击★	每次潜入时,可以使用3次『一枪倒地』。
8	点击散弹★	『随意开火』的伤害提高。Rank 2的伤害从25%提升至50%
10	织田特殊射击★	可以让主人公的枪击不受敌人对枪击的抵抗丶无效丶反弹丶吸收效果影响。,
        `,
                    title: "织田信也",
                    type: "ztxy",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
1	传闻的独家★	每次找到新的安全小屋警戒度就会降低。
3	冲击的独家★	警戒度比较不容易上升,在不被敌人发现下遇敌还胜利的话可以降低更多的警戒度。
5	前所未有的独家	刚开始潜入殿堂时,能够以警戒度较低的状态下探索。
7	颤栗的独家★	殿堂的警戒度几乎不会提升，到了第二天后就能变成0,
        `,
                    title: "大宅一子",
                    type: "dzyz",
                    text: "",
                },
                {
                    table: `
          RANK	习得	效果
2	心灵排毒·X	当主人公陷入异常状态,有机会可以立即恢复正常。
3	莲心镜	战斗开始时,主人公有机会获得蓄力及专心致志的效果。
5	正念疗法	在主人公消耗SP时,主人公自身的SP有机会自动恢复。
7	速效心流	『莲心镜』发动的机率有所提升。
9	心灵排毒·DX	『心灵排毒·X』发动的机率有所提升,
        `,
                    title: "丸喜拓人",
                    type: "wxtr",
                    text: "",
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
                
                `,
                    title: "",
                    type: "",
                },
            ],
        },
    ];
    return new Promise<Data<StrategyMainData[]>>((resolve) => {
        resolve({
            code: "200",
            msg: "success",
            result: res,
        });
    });
};
