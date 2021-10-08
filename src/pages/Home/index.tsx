import React, { useState, useEffect } from "react";
import FlatListSkills from "../../components/flatListSkills";
import { ISkill } from "../../interfaces";
import { View } from "react-native";
import { SkillService } from "../../service/api/skill-service";

const Home = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    SkillService.getSkills().then((data) => {
      console.log("data: ", data);
      setSkills(data);
    });
  }, []);

  if (!!skills.length) {
    return (
      <View style={{ marginBottom: 130 }}>
        <View
          style={{
            height: 40,
            backgroundColor: "#302E4D",
          }}
        />
        <FlatListSkills props={skills} />
      </View>
    );
  } else {
    return <></>;
  }
};

export default Home;
