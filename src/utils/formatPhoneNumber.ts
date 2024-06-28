/**
 * Converts a string of numbers to a brazilian phone format: (11) 98765-4321
 */

function formatPhoneNumber(phone: string) {
  let newPhone;

  // Removes any NaN character
  phone = phone.replace(/\D/g, "");

  if (phone.length > 11) {
    phone = phone.slice(0, 11);
  }

  if (phone.length === 11) {
    newPhone = `(${phone.substring(0, 2)}) ${phone.substring(
      2,
      7
    )}-${phone.substring(7, 11)}`;
  } else if (phone.length > 2) {
    newPhone = `(${phone.substring(0, 2)}) ${phone.substring(
      2,
      6
    )}-${phone.substring(6)}`;
  } else {
    newPhone = phone;
  }

  return newPhone;
}

export { formatPhoneNumber };
