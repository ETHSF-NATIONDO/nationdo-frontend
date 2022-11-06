import { Grid, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import { default as ReactSelect } from "react-select";

const SkillsTab = () => {
  const [skills, setSkills] = useState([]);

  const handleChange = async (selected) => {
    setSkills(selected);
  };

  const skillsSet = [
    { value: 1, label: "Javascript" },
    { value: 2, label: "Typescript" },
    { value: 3, label: "Solidity" },
    { value: 4, label: "CSS" },
    { value: 5, label: "Rust" },
    { value: 6, label: "Golang" },
    { value: 7, label: "NextJs" },
    { value: 8, label: "Python" },
    { value: 9, label: "SQL" },
  ];

  return (
    <Grid w={"77%"} marginLeft={20}>
      <Heading as="h5" size="md">
        What they are good at?
      </Heading>

      <ReactSelect
        placeholder="Select option"
        options={skillsSet}
        isMulti
        isSearchable={true}
        onChange={handleChange}
        className="basic-multi-select"
        classNamePrefix="select"
        widht={"300px"}
      />
      <Button onClick={() => console.log(skills)}>SHOW</Button>
    </Grid>
  );
};

export default SkillsTab;
