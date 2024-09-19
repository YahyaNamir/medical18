import React, {useState} from 'react';
import Svg, {Path} from 'react-native-svg';

const BodyFront = () => {
  const [selectedParts, setSelectedParts] = useState([]);

  const handlePress = partId => {
    setSelectedParts(prevSelectedParts =>
      prevSelectedParts.includes(partId)
        ? prevSelectedParts.filter(id => id !== partId)
        : [...prevSelectedParts, partId],
    );
  };

  const getFillColor = partId =>
    selectedParts.includes(partId) ? '#EF0107' : 'dodgerblue';

  return (
    <Svg width={364} height="700">
      <Path
        fill={getFillColor('face')}
        onPress={() => handlePress('face')}
        stroke="#600"
        id="face"
        d="M215,63c-0.4-7.7-3.9-5.7-5.4-3.6c0.3-3.6,0.8-3.3,0-19c-0.8-15.7-17.8-25-27.1-25
                c-15.1,0-24.6,15.4-26.1,21.8c-0.9,4.1-1.4,11.5-1.2,13.8c0.2,2.3,0.5,6,0.3,7.9l0,0c-0.5-0.9-2-2.9-4-0.9c-2,2-0.9,8.3-0.4,10.1
                c0.5,1.8,2.9,7.2,3.5,7.8c0.7,0.6,2.5,2.4,4.2-0.8l0,0c0.3,2.5,0.6,6.1,1.6,9.2c1.5,2,11,11.4,21.7,11.4s17.9-4.3,22.4-11.3
                c1.3-2.8,2.5-7.5,2.3-9.1c1.8,3.1,4.4,1.6,4.9-0.9C212.3,72.1,215.4,70.7,215,63z"
      />
      <Path
        fill={getFillColor('right_eye')}
        onPress={() => handlePress('right_eye')}
        stroke="#600"
        id="right_eye"
        d="M171.4,56.2c4.2,0,7.1-2.1,7.1-4.6c0-2.5-2.9-4.6-7.1-4.6s-7.6,2.1-7.6,4.6
                S167.2,56.2,171.4,56.2z"
      />
      <Path
        fill={getFillColor('left_eye')}
        onPress={() => handlePress('left_eye')}
        stroke="#600"
        id="left_eye"
        d="M195,56.2c4.2,0,7.6-2.1,7.6-4.6c0-2.5-3.4-4.6-7.6-4.6c-4.2,0-7.1,2.1-7.1,4.6
                C187.9,54.2,190.8,56.2,195,56.2z"
      />
      <Path
        fill={getFillColor('right_ear')}
        onPress={() => handlePress('right_ear')}
        stroke="#600"
        id="right_ear"
        d="M151.5,58.1c-2,2-0.9,8.3-0.4,10.1c0.5,1.8,2.9,7.2,3.5,7.8c0.7,0.6,2.5,2.4,4.2-0.8
                c0-4.9-2.3-12.4-3.3-16.2C155,58.1,153.4,56.1,151.5,58.1z"
      />
      <Path
        fill={getFillColor('left_ear')}
        onPress={() => handlePress('left_ear')}
        stroke="#600"
        id="left_ear"
        d="M206.8,75.4c1.8,3.1,4.4,1.6,4.9-0.9c0.6-2.5,3.7-3.9,3.3-11.6c-0.4-7.7-3.9-5.7-5.4-3.6
                C209.1,61.7,206.4,72.9,206.8,75.4z"
      />
      <Path
        fill={getFillColor('nose')}
        onPress={() => handlePress('nose')}
        stroke="#600"
        id="nose"
        d="M178.7,57.7c-0.2,1.5-2.5,3.1-2.8,6.4c-0.2,2.3,3.1,3.7,5,3.2c2.5,1.3,3.3,0.3,4.8-0.3
                c2.8,0.4,3.9-1.6,3.9-3.8c0-2.2-2.1-3.3-2.4-6c-0.2-2.7-1.7-3.7-1.5-6.6c0.1-2.9-1.2-4.8-3-4.8c-2.6,0-3.1,3.9-2.9,5.2
                C180.1,52.3,178.9,56.2,178.7,57.7z"
      />
      <Path
        fill={getFillColor('mouth')}
        onPress={() => handlePress('mouth')}
        stroke="#600"
        id="mouth"
        d="M188,71.4c-1.1-1.3-3.1-0.8-3.9-0.4c-0.4,0.2-1.7,0.4-2.5-0.2c-0.8-0.6-3-0.1-3.6,0.8
                c-0.6,0.9-5.8,2.5-6.2,4c-0.4,1.5,4.2,1.6,5.4,2c1.2,0.4,2.2,1.8,6.4,1.8c4.2,0,5.4-1.4,6.5-1.6c1.1-0.2,4-0.6,4.2-1.7
                C194.5,75,189.8,73.6,188,71.4z"
      />
      <Path
        fill={getFillColor('neck')}
        onPress={() => handlePress('neck')}
        stroke="#600"
        id="neck"
        d="M155.3,125.9c7.7-0.4,20.2-1.1,22.2,1.8c2,2.9,7.8,2.9,9.6,0c1.9-2.9,18.7-3.1,24.9-2.1
                c2.4,0.4,4.8,0.4,7.1,0.2c5.4-0.5,10-2.5,12.4-4.9c-4.4,0-9.1-2.5-15.2-5.3c-7.9-3.5-12.1-7.8-12.4-9.1c-0.3-1.3,0.1-16.9,0.4-21.8
                c-4.5,7-11.8,11.3-22.4,11.3c-10.6,0-20.2-9.5-21.7-11.4c1.1,3.1,0.7,14.6,0.4,22.2c-4.2,7.5-19.6,11.8-23.5,13.5
                c1,0.8,5.2,3.2,10.2,4.7C150,125.5,152.7,126,155.3,125.9z"
      />
      <Path
        fill={getFillColor('chest')}
        onPress={() => handlePress('chest')}
        stroke="#600"
        id="chest"
        d="M243,150.8c-1-10.2-18.5-23.7-23.8-25.1c-2.3,0.2-4.7,0.2-7.1-0.2c-6.3-0.9-23.1-0.8-24.9,2.1
                c-1.9,2.9-7.6,2.9-9.6,0c-2-2.9-14.6-2.2-22.2-1.8c-2.6,0.1-5.3-0.3-7.9-1.1c-3.9,1.7-22.6,13-25.6,28.6c-0.2,1.2-0.4,2.4-0.4,3.6
                c-0.5,17.5,0,35.4-0.1,42c0.2,0,4.7,12.3,6,15.1s2.5,8.7,4.2,12.1c4,3.8,22.9,12.4,35.9,9c13-3.4,17.9-3.1,31.9,0.1
                c14,3.1,25.8-1.4,35.8-13.3c0.6-1.6,2.3-5.8,2.6-7.4c0.3-1.6,1.3-3.4,2-4.8c0.7-1.3,3.7-10.6,3.9-10.4
                C244.1,192.8,243.6,156.7,243,150.8z"
      />
      <Path
        fill={getFillColor('abdomen')}
        onPress={() => handlePress('abdomen')}
        stroke="#600"
        id="abdomen"
        d="M199.4,235.2c-14-3.1-18.9-3.5-31.9-0.1c-13,3.4-31.9-5.2-35.9-9c1.7,3.3,1,5.9,1.8,8.7
                c0.9,2.8,2.5,10.5,0.2,20.4c-2.2,9.9-0.8,17.5-0.2,19.7c0.4,1.5,1.1,2.5,0.7,4.3c5.7,5.7,14.9,16.9,49.3,16.9
                c34.4,0,42.4-10.1,48.4-16.4c-0.8-2.2-0.2-5.9,1.2-10.4c1.5-4.5-1.7-21.9-1.9-25.9c-0.2-4,1.2-10.5,1.3-13.5c0.1-3,2.1-6.5,2.7-8.1
                C225.2,233.9,213.4,238.3,199.4,235.2z"
      />
      <Path
        fill={getFillColor('left_hip')}
        onPress={() => handlePress('left_hip')}
        stroke="#600"
        id="left_hip"
        d="M183.4,330.4l0-34.2c0,0,21.2-0.9,27.3-3.1c6.2-2.2,14.3-7,21.1-13.4c0,0,4.6,13.6,4.9,17.7
                c0,0-15.2,12.7-18.6,15.7c-3.4,3.1-16.1,14.8-21.5,21.1L183.4,330.4z"
      />
      <Path
        fill={getFillColor('right_hip')}
        onPress={() => handlePress('right_hip')}
        stroke="#600"
        id="right_hip"
        d="M183.4,330.4l0-34.2c0,0-21.7-0.7-29.2-3.9c-7.5-3.1-14.3-7.5-20.1-13.1c0,0-3.7,5.5-5,16.9
                c0,0,15.8,12.9,17,15.2c0,0,20.2,20.5,22.2,22.9C168.4,334.3,180.1,329.5,183.4,330.4z"
      />
      <Path
        fill={getFillColor('bassin_1_')}
        onPress={() => handlePress('bassin_1_')}
        stroke="#600"
        id="bassin_1_"
        d="M196.6,334.3c0,0-15.5-8.9-26.8,0l9.3,15.6c0,0,1.3-2.6,6.7-0.8L196.6,334.3z"
      />
      <Path
        fill={getFillColor('right_shoulder')}
        onPress={() => handlePress('right_shoulder')}
        stroke="#600"
        id="right_shoulder"
        d="M121.9,153.4c3-15.6,21.6-26.9,25.6-28.6c-5-1.4-9.2-3.9-10.2-4.7c-3.9,1.7-7.6,1-13.1,2.1
                c-5.5,1.1-20.4,6.5-26.2,18.5c-5.9,12-4.7,28-4.5,32.2c0,0.6,0,1.1,0,1.6C99.6,167,114.7,165.2,121.9,153.4z"
      />
      <Path
        fill={getFillColor('left_shoulder_1_')}
        onPress={() => handlePress('left_shoulder_1_')}
        stroke="#600"
        id="left_shoulder_1_"
        d="M243,150.8c6.6,14.7,22.6,14.8,28.7,23.8c-0.4-1.7-0.5-3.9-0.2-7.1
                c0.9-9.3-2.4-25.6-8.8-33.6c-6.4-8-26.1-13.1-31.2-13.1c-2.4,2.4-7,4.4-12.4,4.9C224.5,127.1,242,140.6,243,150.8z"
      />
      <Path
        fill={getFillColor('right_arm')}
        onPress={() => handlePress('right_arm')}
        stroke="#600"
        id="right_arm"
        d="M121.5,157c0-1.2,0.2-2.4,0.4-3.6c-7.2,11.8-22.3,13.6-28.6,21.2c-0.2,3-1.4,4-3.7,7.2
                c-2.6,3.8-7.5,19.3-9.2,25.1c-0.2,0.9-0.4,1.6-0.6,2.2c-0.7,8.7,5.3,12.7,12,15.5c5.6,2.3,12,4.1,16.4,0.8c0.3-0.8,0.8-1.7,1.4-2.8
                c1.7-3.3,11.5-23.5,11.8-23.6C121.5,192.4,121,174.5,121.5,157z"
      />
      <Path
        fill={getFillColor('left_arm_1_')}
        onPress={() => handlePress('left_arm_1_')}
        stroke="#600"
        id="left_arm_1_"
        d="M274,224.7c7-2.9,12.7-7.1,11.4-16.6c-0.8-5.5-8.8-25.1-10.8-28.1c-1.1-1.6-2.2-3-2.8-5.4
                c-6.2-8.9-22.1-9-28.7-23.8c0.6,5.9,1.1,42,0.7,48.6c0.1,0,10.2,20.9,11.5,23.6C259.5,229.4,267.3,227.5,274,224.7z"
      />
      <Path
        fill={getFillColor('right_elbow')}
        onPress={() => handlePress('right_elbow')}
        stroke="#600"
        id="right_elbow"
        d="M91.8,224.7c-6.7-2.8-12.7-6.8-12-15.5c-0.9,3.8-0.7,4.7-4.3,9.2c-2.9,3.7-7.7,14.3-11.1,24
                c7.8-13.9,33.6,2.3,37.1,9.7c3-8,5.5-21.4,5.6-23.1c0.1-1.2,0.4-2.1,1.1-3.5C103.8,228.8,97.4,227,91.8,224.7z"
      />
      <Path
        fill={getFillColor('left_elbow_1_')}
        onPress={() => handlePress('left_elbow_1_')}
        stroke="#600"
        id="left_elbow_1_"
        d="M301.6,244.1c-1-3.9-2.4-8.1-4.4-11.8c-2.4-4.6-8.1-14.7-8.7-15.8c-1.6-2.6-2.6-4.5-3.2-8.5
                c1.3,9.5-4.4,13.7-11.4,16.6c-6.7,2.8-14.5,4.7-18.7-1.7c1.3,2.7,3.4,5.6,3.4,8.5c0,0.7,0.8,6.8,2.2,12.4c1.1,4.6,2.6,8.9,3,9.9
                C263.1,247.4,294.5,225.8,301.6,244.1z"
      />
      <Path
        fill={getFillColor('right_forearm_1_')}
        onPress={() => handlePress('right_forearm_1_')}
        stroke="#600"
        id="right_forearm_1_"
        d="M64.5,242.4c-1.5,4.3-2.6,8.4-3.2,11.7c-1,5.8-4.3,19.2-8.2,30.6
                c-0.9,2.5-1.7,4.9-2.6,7.1c0.8,4.4,15.9,11.5,20.9,9.1c0.7-1.3,1.4-2.5,1.8-3.2c2.3-3.7,5.8-9.4,12.2-17.3s12.5-19.5,15.7-27.3
                c0.1-0.3,0.2-0.6,0.4-1C98.1,244.7,72.3,228.5,64.5,242.4z"
      />
      <Path
        fill={getFillColor('left_forearm')}
        onPress={() => handlePress('left_forearm')}
        stroke="#600"
        id="left_forearm"
        d="M314.8,291.1c-1.4-3.7-2.9-7.9-4-10.6c-2-4.9-6.3-25-9.2-36.4c-7.1-18.3-38.5,3.3-37.8,9.7
                c3.4,8.8,17.5,29.6,19.8,32.3c2.3,2.8,8.1,11.3,9.6,13.9C296.5,304.9,315.7,295.8,314.8,291.1z"
      />
      <Path
        fill={getFillColor('right_wrist')}
        onPress={() => handlePress('right_wrist')}
        stroke="#600"
        id="right_wrist"
        d="M50.5,291.8c-2.5,6.4-4.8,11.1-5.1,11.8c-0.4,1-0.7,1.6-1.5,2.3c4.4,0.2,14.2,4.3,21.1,9.5
                c1-3.8,4.1-10.2,6.4-14.5C66.4,303.3,51.3,296.2,50.5,291.8z"
      />
      <Path
        fill={getFillColor('left_wrist')}
        onPress={() => handlePress('left_wrist')}
        stroke="#600"
        id="left_wrist"
        d="M322.6,305.9c-4.2-2-2.8-4-4.7-7.4c-0.8-1.5-2-4.3-3.1-7.4c0.9,4.7-18.4,13.8-21.6,8.9
                c0.8,1.3,2.5,5.1,4.2,8.7c1.5,3.3,2.9,6.4,3.2,6.8C307.9,309.6,318.5,305.6,322.6,305.9z"
      />
      <Path
        fill={getFillColor('right_hand')}
        onPress={() => handlePress('right_hand')}
        stroke="#600"
        id="right_hand"
        d="M37.6,308.4c-6.6,1.8-16.2,9.9-18.5,11.4s-3.8,4.1-5.8,5.2c-2,1-2,4.2,0,5.2
                c2,0.9,4.7,0.1,6.4-0.7s4.4-4.1,7.6-5.2c1.9-0.6,3.7-0.7,3.7,0.1s-4.2,11-4.5,12.5c-0.3,1.5-1.9,6.8-2.9,10.4
                c-1,3.6-2.7,10.4-3.3,14.3c-0.6,3.9,0.4,5.8,2.5,6.2c2.1,0.4,3.9-3.7,4.2-5.2c0.4-1.5,1.4-6.3,2-7.6c0.6-1.3,3.2-9.2,3.9-10.8
                c0.7-1.6,1.2-4.2,2.1-3.8c1,0.4-0.2,2.9-0.9,4.8c-0.7,1.9-3.5,12.1-3.9,14c-0.4,1.9-2.5,9.7-2.6,11c-0.1,1.3-0.9,4.3,1.3,5.2
                c2.3,0.9,3.8-0.9,4.7-2.8c0.9-1.8,2.6-8.6,3.6-12.8c1-4.2,2.8-9.6,3.5-11.8c0.7-2.2,1-3.9,1.9-3.9c0.9,0.1,0.7,1.2,0.4,2.3
                c-0.4,1.1-3,10.1-3.5,12.6c-0.5,2.5-2.1,7.9-2.6,10c-0.6,2.1-0.9,4.5,1.2,5.3c2.1,0.7,3.4-0.7,4.3-2.3c0.9-1.6,3.9-10.5,4.6-13.3
                s2.3-9.1,3-11c0.7-1.9,1.2-2.8,1.8-2.7c0.6,0.1,0.1,1.3-0.6,3.4c-0.7,2.1-2.6,9.1-3.5,12.3c-0.9,3.2-1.1,4.7,0,5.9
                c1.1,1.2,3.5-0.3,4-1.2c0.6-1,1.5-5.4,2.8-8c0.8-1.6,1.8-5.5,3.2-9.5c0.8-2.4,2.1-4.8,2.8-6.8c1.7-5.4,2.1-9.2,3.4-14
                c1.3-4.7,0.1-5.7,0.5-9.9c0-0.5,0.2-1.1,0.3-1.7c-6.9-5.3-16.7-9.3-21.1-9.5C43,306.7,41.3,307.4,37.6,308.4z"
      />
      <Path
        fill={getFillColor('left_hand')}
        onPress={() => handlePress('left_hand')}
        stroke="#600"
        id="left_hand"
        d="M348.9,320.6c-1.3-1.8-8.6-5.6-10.7-7.1c-1-0.7-3.9-2.1-7-3.6c-3.1-1.5-6.5-3-8.6-4
                c-4.1-0.3-14.7,3.7-22,9.6c0.5,0.9-0.4,3.5,0.1,8c0.5,4.5,2,11.4,3.1,15.8c1.1,4.4,3.4,9,4.2,11.2c0.7,2.2,4.6,14.4,6.2,15.7
                c1.3,1.1,3.7,0.4,4-1.3c0.4-1.7-0.8-5.3-1.2-6.9c-0.4-1.6-2.8-9.4-3.2-10.7c-0.4-1.2-1-2.5-0.1-2.5c0.9,0,1,1.3,1.6,2.8
                c0.6,1.4,2.9,9.6,3.4,11.8c0.5,2.3,2.2,8.3,3.1,10.7c0.9,2.3,2.5,4.9,4.4,4.8c2-0.1,2.4-2.3,2.5-4.1c0.1-1.8-2.9-11.5-3.1-13.5
                s-2.6-9.4-3-10.4c-0.4-1-0.7-2.5,0.3-2.5c1-0.1,1.4,2.8,1.8,4.2c0.4,1.5,4.8,15.6,5,17.4c0.2,1.8,1.3,7.1,2.9,8.7
                c1.3,1.3,2.8,1.9,4.2,0.4c1.5-1.5,1.1-4.9,0.4-7.5c-0.7-2.6-2.3-10.4-2.7-12.3c-0.4-1.9-3.1-10.2-3.6-11.8c-0.4-1.5-1-2.6-0.6-2.8
                c0.5-0.2,1.1,0.6,1.7,2.6c0.6,2,3.3,10.1,4.1,12.5c0.9,2.5,0.7,5.7,2,8.5c1.3,2.8,3.4,3.7,5.2,3.5c1.8-0.2,2.1-3.6,2.1-5
                c0-1.3-2.3-10.1-3.1-13.4c-0.7-3.4-2.6-8.2-3.2-11.3c-0.6-3.1-3.6-11.5-4.2-12.8c-0.6-1.3-0.3-2.3,1.2-1.9c1.5,0.4,4.5,1.3,6.4,3.7
                c1.8,2.5,5.3,3.3,6.6,3.4c1.2,0.1,4.2,0.2,4.5-3.1C354.2,324.1,350.2,322.5,348.9,320.6z"
      />
      <Path
        fill={getFillColor('right_knee')}
        onPress={() => handlePress('right_knee')}
        stroke="#600"
        id="right_knee"
        d="M123.2,439.7c0.6,1.3,1.2,2.4,1.6,3.5c3.2,6.9,2.9,18.4,3.2,29.9c0,1.8,0.1,3.8,0.2,5.8
                c5.2,21.8,25,10.4,33.8,1.9c0.2-0.7,0.5-1.3,0.7-1.7c0.4-0.8,1-5.2,1.7-8.2c0.6-2.9,1-9.1,2-13.1c0.1-0.4,0.2-0.8,0.3-1.3
                C149.6,467.5,140.7,446.1,123.2,439.7z"
      />
      <Path
        fill={getFillColor('left_knee')}
        onPress={() => handlePress('left_knee')}
        stroke="#600"
        id="left_knee"
        d="M198.2,455.8c1,4.1,2.1,6.9,2.1,11.8c0,4.8,2,10.9,2.5,12.3c8.5,8.9,29.9,23,34-4.3
                c0-5.6,1.6-19.3,1.8-24.7c0.2-5.4,0.7-6.4,3.4-11.3C223.9,446,216,468.5,198.2,455.8z"
      />
      <Path
        fill={getFillColor('right_leg')}
        onPress={() => handlePress('right_leg')}
        stroke="#600"
        id="right_leg"
        d="M128.2,478.9c0,2.1,0,4.2-0.1,6.4c-0.7,9.9-2.4,20.6-2,26c0.5,7.8,2.2,30.4,3.7,40.7
                c1.5,10.3,3.4,40.7,3.5,42.9c0,0.5,0,1.1-0.1,1.7c3.4-5.6,17.9-4.8,22-3c-0.5-1.9-1.1-5.2-1.2-7.4c-0.1-2.6,3.7-23.1,4.1-28.6
                c0.4-5.5,1.8-14.5,2.1-16.3c0.3-1.9,2.8-8.4,4.7-12.7c1.8-4.3,1.7-9.8,1.2-13.4c-0.5-3.6-1.8-22.4-2.2-25.2
                c-0.4-2.8-1.1-6.4-1.7-7.4c-0.3-0.5-0.3-1.1-0.1-1.8C153.2,489.3,133.4,500.7,128.2,478.9z"
      />
      <Path
        fill={getFillColor('left_leg')}
        onPress={() => handlePress('left_leg')}
        stroke="#600"
        id="left_leg"
        d="M202.8,479.8c0.6,1.4-0.6,8.1-2.1,16.6c-1.5,8.6-2,23.9-1.5,27.8c0.5,3.9,4.7,14.1,5.8,17.2
                c1.1,3,0.3,4.3,1,10.2s3.5,23.2,4.4,28.9c0.9,5.7,0.7,10.3-0.3,13.3c3.3-2.2,20.9-3.4,22.6,4.2c-0.4-2.1-0.9-4.9-0.5-10.9
                c0.4-6,2.5-29.6,4-43c1.6-13.5,3.3-40.2,2.2-47.3c-1.1-7.1-1.7-15.7-1.7-21.3C232.7,502.8,211.4,488.7,202.8,479.8z"
      />
      <Path
        fill={getFillColor('right_ankle')}
        onPress={() => handlePress('right_ankle')}
        stroke="#600"
        id="right_ankle"
        d="M133.2,596.6c-0.2,1.9-0.7,4-0.9,5.5c-0.2,2,1,4.2,0.7,7.8c0,0.2,0,0.3-0.1,0.5
                c6.2-2.2,19.7,4.3,24,10.3c0.6-3.8,0.5-7.5-0.2-9.4c-0.8-2-1.1-3.5-0.4-6.1c0.7-2.6-0.3-9.2-0.9-10.7c-0.1-0.2-0.2-0.5-0.3-0.9
                C151.1,591.8,136.6,591,133.2,596.6z"
      />
      <Path
        fill={getFillColor('left_ankle')}
        onPress={() => handlePress('left_ankle')}
        stroke="#600"
        id="left_ankle"
        d="M210.1,593.9c-1.1,3-1.6,10.3-1.3,11.1c0.2,0.8,0.4,4.6-0.5,6.6c-0.9,2-0.8,6.5-0.3,10.5
                c2.9-6.7,18.1-14.7,24.5-11.6c-1-2.7-1.1-2.8-0.5-4.5c0.6-1.7,1.1-5.9,0.7-8C231,590.5,213.4,591.7,210.1,593.9z"
      />
      <Path
        fill={getFillColor('right_foot')}
        onPress={() => handlePress('right_foot')}
        stroke="#600"
        id="right_foot"
        d="M132.9,610.4c-0.6,3.5-3.3,7.6-5.3,11.6c-2.1,4.3-6.4,9.5-10.3,13.9c-3.9,4.4-5.1,12.9-5,14.5
                c0.1,1.5,1.5,2.9,3,2.7c0,0.6,0.5,1.4,2.1,1.2c0.1,1,0,3.1,4,2.5c2,2.4,3.9,2.3,5.3,0.9c2.6,3.1,5.1,3.2,7.7,2.8
                c2.1-0.3,5.5-3.8,6-5.2c0.6-1.3,1.1-1.9,2.9-3.3c1-0.8,1.9-2,2.5-4.3c0.6-1.9,1-5,1.1-6.3c0.3-2.9,0.3-5.3,2.2-10.5
                c4.3-1.8,6.9-5.1,7.6-9.2c0.1-0.3,0.1-0.6,0.2-0.9C152.6,614.6,139.1,608.2,132.9,610.4z"
      />
      <Path
        fill={getFillColor('left_foot')}
        onPress={() => handlePress('left_foot')}
        stroke="#600"
        id="left_foot"
        d="M208,622.2c0.5,4,5.9,7.4,7.4,8.1c1.5,0.7,1.5,2,1.9,3.4c0.4,1.4,1.4,5.2,1.9,10.3
                c0.5,5.1,3.1,7.7,4.3,8.7c1.2,0.9,1.4,1.5,1.8,2.3c0.4,0.8,1.7,3,5.5,4.8c3.8,1.8,7.4-0.6,8.2-2.3c2.2,2.2,5.4,0.2,6-1
                c2.4,0.7,3.8-1.6,3.9-2.5c0.8,0.2,1.8-0.5,2.1-1.3c0.4,0.2,1.2,0.3,2.5-1.6c1.2-2-1.5-8.6-2-10.6c-0.6-2-4.7-7.3-8-10.7
                c-3.3-3.4-3.8-5.6-6.1-9.2c-2.3-3.6-3.6-7.2-4.6-9.9C226.1,607.6,210.9,615.6,208,622.2z"
      />
      <Path
        fill={getFillColor('1')}
        onPress={() => handlePress('1')}
        class="st0"
        stroke="#600"
        d="M116.1,381.4c-0.4,3.7-0.8,7.5-1,11.2c-0.3,4.5,0.1,8.9,0.2,13c0.4,17.2,4.7,27.2,7.9,34.1
		c17.5,6.5,26.4,27.8,43.4,16.9c1.2-5.5,3.9-19.6,4.7-25.6c0.3-2.2,0.9-6.7,1.7-12C147.7,430.6,120.7,388.9,116.1,381.4z"
      />
      <Path
        fill={getFillColor('2')}
        onPress={() => handlePress('2')}
        class="st0"
        stroke="#600"
        d="M125,332.5c-0.9,5.1-2,10.4-2.9,14.7c-1.5,7.4-4.3,20.5-6,34.2c4.6,7.5,31.5,49.1,56.9,37.5
		c1.5-10.4,3.5-24.2,4.1-31.3c0.2-2.6,0.3-5.1,0.4-7.4C170.2,379.8,139,375.6,125,332.5z"
      />
      <Path
        fill={getFillColor('3')}
        onPress={() => handlePress('3')}
        class="st0"
        stroke="#600"
        d="M188.1,380.3c9.3-8.1,8.5-35.3,7.9-45.3c-0.4,0.5-0.9,1-1.3,1.5c-3.9,4.5-7,8.9-8.9,12.6
		c0.6,0.4,1.5,2.5,2.1,4s0.5,10.2-0.1,15.5c-0.2,2-0.2,6.5,0,11.7C187.9,380.3,188,380.3,188.1,380.3z"
      />
      <Path
        fill={getFillColor('4')}
        onPress={() => handlePress('4')}
        class="st0"
        stroke="#600"
        d="M249.2,380.3c-0.5-4.9-1.2-9-1.5-11c-0.9-5-4.9-27.3-7.1-38.9c-14.1,48.3-48.7,49.9-52.5,49.9
		c-0.1,0.1-0.1,0.1-0.2,0.2c0.3,8.8,1.1,19.5,1.8,22.9c0.5,2.5,1.4,8.5,2.3,14.7C219.3,433.8,249.2,380.3,249.2,380.3z"
      />
      <Path
        fill={getFillColor('5')}
        onPress={() => handlePress('5')}
        class="st0"
        stroke="#600"
        d="M250.2,392.7c-0.2-4.4-0.6-8.7-1-12.4c0,0-29.9,53.5-57.2,37.8c1.1,7.3,2.2,15.1,2.6,18.2
		c0.8,5.7,2.5,15.4,3.5,19.5c17.8,12.7,25.7-9.8,43.8-16.3c2.8-4.9,6.9-13.4,7.8-25.7C250.2,408.5,250.6,400.5,250.2,392.7z"
      />
      <Path
        fill={getFillColor('6')}
        onPress={() => handlePress('6')}
        class="st0"
        stroke="#600"
        d="M177.1,356c-0.1-4.2,1.5-5,2-6c-1.9-4-5-8.5-8.7-13.2c-0.3-0.4-0.7-0.9-1.1-1.3c0,0.1-3.1,35,7.5,44.7
		c0.3,0,0.5,0,0.7,0c0.3-7,0.1-12.2-0.2-13.8C176.9,364.3,177.2,360.2,177.1,356z"
      />
      <Path
        fill={getFillColor('7')}
        onPress={() => handlePress('7')}
        class="st0"
        stroke="#600"
        d="M164.9,468c0.4-3.1,0.8-7,1.5-9.9c0.1-0.4,0.2-0.8,0.3-1.3c-17.1,11-26-10.4-43.5-16.8
		c0.6,1.3,1.2,2.4,1.6,3.5c2.5,5.4,2.9,13.7,3,22.6c3.9-2.9,10.3-4.8,17.5-4.8C154,461.3,161.4,464,164.9,468z"
      />
      <Path
        fill={getFillColor('8')}
        onPress={() => handlePress('8')}
        class="st0"
        stroke="#600"
        d="M199.9,467.3c-0.4-3.1-0.8-7-1.5-9.9c-0.1-0.4-0.2-0.8-0.3-1.3c17.1,11,26-10.2,43.5-16.6
		c-0.6,1.3-1.2,2.2-1.6,3.3c-2.5,5.4-2.9,13.7-3,22.6c-3.9-2.9-10.3-4.8-17.5-4.8C210.9,460.5,203.4,463.3,199.9,467.3z"
      />

      <Path
        fill={getFillColor('9')}
        onPress={() => handlePress('9')}
        stroke="#600"
        class="st0"
        d="M137.7,303.2c-0.7,9.4-3.1,25-12.2,30.3c13.8,40.6,43,45.7,51.3,46.4c-10.5-9.9-7.4-44.7-7.4-44.8
	C159.9,323.4,146.6,311.1,137.7,303.2z"
      />
      <Path
        fill={getFillColor('10')}
        onPress={() => handlePress('10')}
        stroke="#600"
        class="st0"
        d="M137.7,303.2c-3.9-3.4-6.9-6-8.4-7.3c-1,7.1-1.5,14.5-1.4,16.7c0.2,2.5-1.2,10.8-2.8,19.6
	c0.1,0.5,0.3,0.9,0.5,1.3C134.5,328.1,137,312.5,137.7,303.2z"
      />
      <Path
        fill={getFillColor('11')}
        onPress={() => handlePress('11')}
        stroke="#600"
        class="st0"
        d="M228.3,303.8c3.9-3.4,7-6,8.5-7.3c1,7.1,1.5,14.5,1.4,16.7c-0.2,2.5,1.2,10.8,2.8,19.6
	c-0.1,0.5-0.3,0.9-0.5,1.3C231.5,328.8,229,313.2,228.3,303.8z"
      />
      <Path
        fill={getFillColor('12')}
        onPress={() => handlePress('12')}
        class="st0"
        stroke="#600"
        d="M228.3,303.8c0.7,9.4,3.2,25,12.3,30.3c-14,40.6-43.6,45.7-52,46.4c10.6-9.9,7.5-44.7,7.5-44.8
    C205.8,324.1,219.3,311.7,228.3,303.8z"
      />
    </Svg>
  );
};

export default BodyFront;
