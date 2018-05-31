# 伤害来源处理器

伤害源处理器允许你访问游戏中的 [伤害来源](/Vanilla/Damage/IDamageSource) 对象。

如果伤害来源在预定义中的没有找到，将会按照给定的名字，自创一个伤害来源对象。

<details>
	<summary>预注册的伤害来源类型</summary>
	<ul>
		<li>IN_FIRE（火-接触）</li>
		<li>LIGHTNING_BOLT（闪电）</li>
		<li>ON_FIRE（火-燃烧）</li>
		<li>LAVA（熔岩）</li>
		<li>HOT_FLOOR（岩浆块）</li>
		<li>IN_WALL（窒息）</li>
		<li>CRAMMING</li>
		<li>DROWN（溺水）</li>
		<li>STARVE（饥饿）</li>
		<li>CACTUS（仙人掌）</li>
		<li>FALL（跌落）</li>
		<li>FLY_INTO_WALL</li>
		<li>OUT_OF_WORLD（虚空）</li>
		<li>GENERIC（普通伤害）</li>
		<li>MAGIC（药水）</li>
		<li>WITHER（凋零效果）</li>
		<li>ANVIL（铁砧）</li>
		<li>FALLING_BLOCK</li>
		<li>DRAGON_BREATH（龙息）</li>
		<li>FIREWORKS（烟花火箭爆炸）</li>
	</ul>
</details>

```
<damageSource:type>;

<damageSource:IN_FIRE>;
```