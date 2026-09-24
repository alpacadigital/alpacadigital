export const site = {
  name: "Alpaca Digital",
  owner: "Gates Jones",
  url: "https://alpacadigital.co",
  email: "hello@alpacadigital.co",
  // Display format, e.g. "(507) 555-0123". Leave empty to hide phone links.
  phone: "(507) 322-8385",
  city: "Rochester, MN",
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
export const smsHref = (phone: string) => `sms:${phone.replace(/[^\d+]/g, "")}`;
