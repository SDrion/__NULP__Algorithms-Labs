## Task
![alt text](https://github.com/SDrion/__NULP__Algorithms-Labs/blob/main/lab2/task.png)

## Installation

```sh
/lab2$ npm install -g typescript
/lab2$ npm i
```

## Usage

```sh
/lab2$ npm start
```

## Files Description

#### 1) ./Model/Hamster.ts  
Клас з назвою Hamster.  
##### Містить поля:
- dailyFood -> денна норма їжі для 1-го хом'яка.

- greedinesPerNeighbor -> додаткова їжа за кожного сусіда.

- totalGreedinesValue -> сума денної їжі хом'яка і їжі яку він вживає за кожного сусіда.

#### 2) ./HamsterPicker.ts  
Клас з назвою HamsterPicker.  
##### Містить поля:
- hamsters -> масив з хом'яками.

- availableFood -> кілкість їжі, яку ми можемо витрачати кожен день.  

##### Містить методи:
- filterBySelfGreedines() -> проходить по масиві з хомяками і відфільтровує тих, для яких денна норма більша ніж availableFood(див. п.1).

- checkForAllNeigbors() -> вираховує totalGreedinesValue для всіх хомяків(в залежності від кількості сусідів) і порівнює це число, повертає true якщо це число менше або рівне і falsе якщо більше. В кінці виконання викликає метод bubbleSortByTotalValue().

- picker() -> викликає checkForAllNeigbors(), якщо не отримано true - викидає найбільш прожорливого хомяка(останнього в відсортованому масиві) і ітерує ще раз, якшо отримано true - повертає довжину масива з хомяками - це буде наша відповідь. 


- bubbleSortByTotalValue() -> сортує масив з хомяками по totalGreedinesValue(див. п.1) в порядку зростання.

- swap(array, f, s) -> у масиві міняє місцями двох хомяків з відповідними індексами f i s.

## Algorithm description
1) Створюємо обєкт picker = new HamsterPicker(hamsters, availableFood, totalHamsters), де:
- hamsters - масив з хомяками(взято з вхідного файлу hamstr_in.txt).
- availabeFood - к-ість їжі, яку можемо витрачати кожен день(взято з вхідного файлу hamstr_in.txt).
- totalHamsters - к-ість хомяків у продажі(взято з вхідного файлу hamstr_in.txt).

2) Викликаємо метод filterBySelfGreedines() обєкта picker.

3) Перевіряємо чи довжина масиву з хомяками не дорівнює 0.
Якщо дорівнює - записуємо у кінцевий файл, що ви не можете дозволити собі хомяка.
#### Якщо ні:
4) Викликаємо метод picker() обєкта picker. Записуємо результат виконаня у вихідний файл(hamstr_out.txt).
