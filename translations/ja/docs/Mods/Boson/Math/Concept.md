# コンセプト

ZenScriptでの算術のほとんどの用途は、加算、減算、 乗算、除算の4つの基本演算でカバーできます。 また、ZenScriptはパワー操作を行う `pow` 関数へのアクセスを提供します。 でもそれだけです より高度な数学演算を実行することはできません そして、 ルックアップテーブルを備えた完全な再実装を必要とし、特に現代のCPUにとって、ハードウェアの最適化から恩恵を受けることはありません。

This is where ZenScriptX Math comes in, providing a set of classes and some basic arithmetic operations that may be of general usefulness, while also benefitting in the most part from hardware optimizations, since most of those are implemented on a native level (via a couple of indirections due to the VM ZenScript runs on).

すべてのドキュメントセクションでは、ユーザーに提供される関数と動作のリストを提供します。

現在実装されている提供されたクラスのリストは次のとおりです。

- [Math](/Mods/Boson/Math/Math/) for common mathematical functions (e.g., sine, cosine, logarithm...)
