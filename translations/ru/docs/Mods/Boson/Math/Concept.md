# Концепция

Большая часть использования математики в ZenScript может быть покрыта четырьмя основными операциями: добавление, вычитание, умножение и деление. Также ZenScript предоставляет доступ к функции `pow` , выполняющей операцию питания. Но это так. Более сложные математические операции не могут быть выполнены, и потребует полной реализации с таблицами поиска и не принесет пользы от оптимизации аппаратного обеспечения в этом отношении, особенно для современных процессоров.

This is where ZenScriptX Math comes in, providing a set of classes and some basic arithmetic operations that may be of general usefulness, while also benefitting in the most part from hardware optimizations, since most of those are implemented on a native level (via a couple of indirections due to the VM ZenScript runs on).

Каждый раздел документации предоставит пользователю список предоставленных функций и их поведение.

Текущим списком реализуемых классов являются:

- [Математика](/Mods/Boson/Math/Math/) для общих математических функций (например, синус, косин, логарифм...)
