# 破坏源代码处理器

伤害源代码处理器允许您在游戏中引用 [IDamageSource](/Vanilla/Damage/IDamageSource/)。

如果损害源不是预定义的来源，这将创建一个具有给定名称的新来源。

<details>
    <summary>预注册的伤害源类型</summary>
    <ul>
        <li>IN_FIE</li>
        <li>LIGHTNING_BOLT</li>
        <li>ON_FIRES</li>
        <li>LAVA</li>
        <li>FLOOR</li>
        <li>IN_WALL</li>
        <li>制造业省</li>
        <li>反转</li>
        <li>已开始</li>
        <li>CACTUS</li>
        <li>常见问题</li>
        <li>FLY_INTO_WALL</li>
        <li>OUT_OUT_WORLD</li>
        <li>GENERIC</li>
        <li>MAGIC</li>
        <li>发信人</li>
        <li>ANVIL</li>
        <li>错误_BLOCK</li>
        <li>RANGON_BREATH</li>
        <li>第一页</li>
    </ul>
</details>

```zenscript
<damageSource:type>;

<damageSource:IN_FIRE>;
```