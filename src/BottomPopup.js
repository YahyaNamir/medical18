import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableWithoutFeedback, Dimensions, FlatList, TouchableOpacity } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

const BottomPopup = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setShow(true),
    close: () => setShow(false),
  }));

  const renderOutsideTouchable = (onTouch) => {
    const view = <View style={styles.outsideTouchableView} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback onPress={onTouch}>
        {view}
      </TouchableWithoutFeedback>
    );
  };

  const renderTitle = () => {
    const { title } = props;
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  };

  const renderContent = () => {
    const { data, onItemPress } = props;
    return (
      <View>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onItemPress(item)}>
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
    );
  };

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  const { onTouchOutside } = props;

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={show}
      onRequestClose={() => setShow(false)}
    >
      <View style={styles.viewPo}>
        {renderOutsideTouchable(onTouchOutside)}
        <View style={styles.modalContent}>
          {renderTitle()}
          {renderContent()}
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  viewPo: {
    flex: 1,
    backgroundColor: '#000000AA',
    justifyContent: 'flex-end',
  },
  outsideTouchableView: {
    flex: 1,
    width: '100%',
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: '#182E44',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 30,
  },
  flatList: {
    marginBottom: 20,
  },
  flatListContentContainer: {
    paddingBottom: 40,
  },
  itemContainer: {
    height: 50,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 25,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#182E44',
  },
  separator: {
    opacity: 0.1,
    backgroundColor: '#18E244',
    height: 1,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    maxHeight: deviceHeight * 0.4,
  },
});

export default BottomPopup;
