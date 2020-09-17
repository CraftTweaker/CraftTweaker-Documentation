# SoundType 套件处理程序

SoundType 打包处理程序让您在游戏中访问声音类型。 当前唯一支持的声音类型是：

<details>
    <summary>点击以展开类型列表</summary>
    <ul>
        <li>木头</li>
        <li>地线</li>
        <li>种植物</li>
        <li>石头</li>
        <li>金属类</li>
        <li>玻璃板</li>
        <li>布色</li>
        <li>沙子</li>
        <li>雪</li>
        <li>梯子</li>
        <li>铁道体</li>
        <li>Slime</li>
    </ul>
</details>

SoundType 以这种方式引用了声音类型：

```zenscript
<soundtype:name>

<soundtype:wood>
```

如果找到声音类型，这将返回一个 [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) 对象。