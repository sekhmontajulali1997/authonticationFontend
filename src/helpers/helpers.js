
export const maskSensitiveData = (data) => {
    const maskedEmail = data.email.replace(/(\w{1})(.*)(@.*)/, (match, p1, p2, p3) => `${p1}${"*".repeat(p2.length)}${p3}`);
    const maskedName = data.name.replace(/(\w{1})(.*)(\w{1})/, (match, p1, p2, p3) => `${p1}${"*".repeat(p2.length)}${p3}`);
    const maskedId = data.name.replace(/(\w{1})(.*)(\w{1})/, (match, p1, p2, p3) => `${p1}${"*".repeat(p2.length)}${p3}`);
  
    return {
      ...data,
      email: maskedEmail,
      name: maskedName,
      id: maskedId,
    };
  };