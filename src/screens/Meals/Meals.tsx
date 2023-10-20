import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MealItem from '../../components/MealItem';
import useFetch from '../../hooks/useFetch';
import styles from './Meals.style';

type _meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const Meals = ({navigation, route}) => {
  const {categoryName} = route.params;

  const {loading, data, error} = useFetch(
    Config.API_URL + Config.FILTER_BY_CATEGORY + categoryName,
  );

  const handleOnPressMeal = (mealId: string, mealName: string) => {
    // console.log('Selected Meal Name: ' + mealName);
    navigation.navigate('Recipe', {mealId, mealName});
  };

  const renderMeal = ({item}) => (
    <MealItem item={item} onPress={handleOnPressMeal} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error || !data.meals) {
    return <Error />;
  }

  if (data.meals){
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.meals}
          renderItem={renderMeal}
          keyExtractor={item => item.idMeal.toString()}
        />
      </SafeAreaView>
    );
  }
};

export default Meals;
