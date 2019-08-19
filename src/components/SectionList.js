import React from "react";
import {
  SectionList,
  Text,
  View,
  ActivityIndicator,
  Button,
  RefreshControl
} from "react-native";

const renderSection = ({ section }) => (
    <View style={{ padding: 8, backgroundColor: "#4fc3c8" }}>
      <Text style={{ color: "white" }}>{section.key.toUpperCase()}</Text>
    </View>
  );

const renderItem = ({ item }) => (
    <ItemRow
      name={item.name.last}
      firstName={item.name.first}
      picture={item.picture.thumbnail}
      email={item.email}
    />
);

const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
);

const _renderEmpty = () => (
    <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
      <Text>Carregando...</Text>
    </View>
);

export default (ContentSectionList = props => (
    <SectionList
      sections={props.data}
      renderSectionHeader={renderSection}
      renderItem={renderItem}
      keyExtractor={item => item.email}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={_renderEmpty}
      refreshControl={
        <RefreshControl refreshing={props.refreshing} onRefresh={props.refresh} />
      }
    />
  ));