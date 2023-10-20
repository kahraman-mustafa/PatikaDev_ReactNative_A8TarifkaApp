import React, {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import CategoryItem from '../../components/CategoryItem';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import styles from './Categories.style';
import useFetch from '../../hooks/useFetch';

type _category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
  name: string;
};

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(
    Config.API_URL + Config.LIST_CATEGORIES,
  );

  const handleOnPressCategory = (categoryId: string, categoryName: string) => {
    // console.log('Selected Category Name: ' + categoryName);
    navigation.navigate('Meals', {categoryName: categoryName});
  };

  const renderCategory = ({item}) => (
    <CategoryItem item={item} onPress={handleOnPressCategory} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error || !data.categories) {
    return <Error />;
  }

  if (data.categories) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.categories}
          renderItem={renderCategory}
          keyExtractor={item => item.idCategory.toString()}
        />
      </SafeAreaView>
    );
  }
};

export default Categories;
