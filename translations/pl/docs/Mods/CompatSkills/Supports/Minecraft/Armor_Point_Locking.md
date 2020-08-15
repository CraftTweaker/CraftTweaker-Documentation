# Blokowanie zbroi

## Funkcja:

Ten typ blokady blokuje możliwość używania zbroi, która zapewnia pewną ilość punktów zbroi za zestawem wymagań. Oznacza to, że jeśli zbroja daje 0. 5 punktów pancerza, jak w poniższym przykładzie możesz zablokować go tylko za pomocą Końca (Przycisk Końcowy 1)!

## Składnia:

    mods.compatskills.ArmorLock.addArmorLock(podwójny pancerz, string... wymagania);
    
    mods.compatskills.ArmorLock.addArmorLock(0.75, "dim|1");