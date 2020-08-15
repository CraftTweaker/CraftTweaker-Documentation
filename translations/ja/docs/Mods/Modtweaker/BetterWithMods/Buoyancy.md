# 浮遊性

浮力は、HCBuoyがBWMで有効になっている場合、アイテムが水に浮く能力に影響します。

値は -1 から 1 の間の小数で、-1 は下に直接シンクします。0 は平衡に達し、1 は上に浮くことができます。

```zenscript
mods.betterwithmods.Buoyancy.set(IItemStack stack, float value);

```