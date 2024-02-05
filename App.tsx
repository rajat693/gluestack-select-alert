import {
  GluestackUIProvider,
  ChevronDownIcon,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  AlertIcon,
  AlertText,
  InfoIcon,
  Alert,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import React from 'react';

const SelectExample = () => {
  return (
    <Select mt="$16">
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select option" />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <SelectItem label="UI Designing" value="ui" isDisabled={true} />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

const AlertExample = () => {
  const [showAlert, setShowAlert] = React.useState(false);

  return (
    <>
      <Button
        mt={'$4'}
        size="lg"
        variant="solid"
        action="primary"
        onPress={() => setShowAlert(!showAlert)}>
        <ButtonText>SHOW ALERT</ButtonText>
      </Button>

      {showAlert && (
        <Alert mx="$2.5" action="info" variant="solid">
          <AlertIcon as={InfoIcon} mr="$3" />
          <AlertText>
            We have updated our terms of service. Please review and accept to
            continue using our service.
          </AlertText>
        </Alert>
      )}
    </>
  );
};

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SelectExample />
      <AlertExample />
    </GluestackUIProvider>
  );
}
