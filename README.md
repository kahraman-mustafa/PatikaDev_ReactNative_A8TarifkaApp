# PatikaDev - React Native Kursu - Web API Ders Sonu Birlikte Yap Projesi
Bu repo [Patika](www.patika.dev) React Native programımız kapsamında "React Native Kursu - Web API" Ders Sonu Kendin Yap Projesi için oluşturulan repodur. İçerisinde bir adet "A8TarifkaApp" isimli React Native uygulaması barındırmaktadır. 

Proje yönergesindeki açıklamalara ilave olarak yemek detay sayfasında ingredientsler listelenmiştir. Youtube linki açılması için kullanılan metoda safe parametresi eklenerek canOpenUrl sorgusu yapıp yapılmadan urlnin açılma alternatifleri sağlanmıştır (canOpenUrl kullanımında hata ile karşılaşıldığı için)

## Kullanılan yapılar: 
- LottiView ile loading/error animasyonu
- Axios ile web apiden veri çekme, çözümleme
- FlatList ve custom componenetler ile veri listeleme
- Veri çekme işlemleri için custom hook olan useFetch kullanımı
- FastImage kütüphanesi kullanımı (Image alternatifi, cache/hızlı render)
- React Navigation, Stack Navigator ile navigasyon
- Sayfa başlığı manipülasyonu
- Custom color dosyası ile renk yönetimi
- Hassas değişkenleri react-native-config kullanarak .env ile yönetme
- Linking kullanımı; Youtube video url ile videoya yönlendirme
- Meals sayfasında absolute positioning uygulaması

## Installation
Öncelikle projeyi clonelayın. 

`git clone https://github.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp.git

## Usage
Projeyi klonladıktan sonra Visual Studio Code programında açınız.
Linux için:
```
cd A8TarifkaApp
npm install
code .
```
![Proje Resmi-1](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_1.png)
![Proje Resmi-2](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_2.png)
![Proje Resmi-3](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_3.png)
![Proje Resmi-4](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_4.png)
![Proje Resmi-5](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_5.png)
![Proje Resmi-6](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_6.png)
![Proje Resmi-7](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_7.png)
![Proje Resmi-8](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_8.png)
![Proje Resmi-9](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_9.png)
![Proje Resmi-10](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_10.png)
![Proje Resmi-11](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A8TarifkaApp/master/A8TarifkaApp_11.png)

# Meal API Usage Examples
## List All Categories
List all meal categories
www.themealdb.com/api/json/v1/1/categories.php

List all Categories, Area, Ingredients
www.themealdb.com/api/json/v1/1/list.php?c=list
www.themealdb.com/api/json/v1/1/list.php?a=list
www.themealdb.com/api/json/v1/1/list.php?i=list

## List all meals in selected category
Filter by Category
www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

Filter by Area
www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

Filter by main ingredient
www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

## Show recepie of the selected meal
Lookup full meal details by id
www.themealdb.com/api/json/v1/1/lookup.php?i=52772

## Images
Meal Thumbnail Images
Add /preview to the end of the meal image URL
www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview

Ingredient Thumbnail Images
www.themealdb.com/images/ingredients/Lime.png
www.themealdb.com/images/ingredients/Lime-Small.png


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
