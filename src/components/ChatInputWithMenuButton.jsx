const { useState } = React;
const styled = window.styled;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const MenuButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
`;

const Dropdown = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;
`;

const DropdownItem = styled.a`
  padding: 10px 20px;
  display: block;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const ChatInputWithMenuButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (option) => {
    console.log(`You selected: ${option}`);
    // Handle the selected option (e.g., send message to chatbot)
    setShowDropdown(false);
  };

  return (
    <Container>
      <Input type="text" placeholder="Enter your message..." />
      <MenuButton onClick={() => setShowDropdown(!showDropdown)}>Menu</MenuButton>
      <Dropdown show={showDropdown}>
        <DropdownItem href="#" onClick={() => handleOptionClick('Option 1')}>Option 1</DropdownItem>
        <DropdownItem href="#" onClick={() => handleOptionClick('Option 2')}>Option 2</DropdownItem>
        <DropdownItem href="#" onClick={() => handleOptionClick('Option 3')}>Option 3</DropdownItem>
      </Dropdown>
    </Container>
  );
};

export default ChatInputWithMenuButton;
