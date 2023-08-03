interface Contact {
  id: number;
  name: string;
}

export const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const contacts: Contact[] = await response.json();

  return contacts.map((contact: Contact) => contact.name);
};
