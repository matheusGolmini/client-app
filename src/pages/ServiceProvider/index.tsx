import { useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, Image } from "react-native";
import FlatListServiceProvider from "../../components/flatListServiceProvider";
import { IPropUseRoute } from "../../interfaces";
import {
  ServiceProviderSkillService,
  ServiceSkillResponse,
} from "../../service/api/service-provider-skill";
import image from "../../assets/ciente-em-duvida.jpg";

const PageServiceProvider = () => {
  const route = useRoute<IPropUseRoute<{ skillId: string }>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [serviceProvider, setServiceProvider] = useState<
    ServiceSkillResponse[]
  >([]);

  useEffect(() => {
    ServiceProviderSkillService.getServicesByAddressAndSkill(
      route.params.skillId
    ).then((value) => {
      setServiceProvider(value);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#605C99"
          style={{ marginTop: 20 }}
        />
      )}
      {!isLoading && serviceProvider.length === 0 ? (
        <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#302E4D",
            }}
          >
            Nenhum prestador encontrado na sua região
          </Text>
          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 200,
              marginTop: 20,
            }}
            source={image}
          />
        </View>
      ) : (
        <FlatListServiceProvider props={{ serviceProvider }} />
      )}
    </>
  );
};

export default PageServiceProvider;
