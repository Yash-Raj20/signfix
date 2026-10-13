export interface WhatsAppPayload {
  name?: string;
  phone?: string;
  signType?: string;
  problem?: string;
  location?: string;
  notes?: string;
}

export function buildWhatsAppUrl(
  phoneNumber: string,
  payload?: WhatsAppPayload
): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');

  if (!payload || (!payload.name && !payload.problem && !payload.signType)) {
    const defaultText =
      'Hi SignFix, I would like to request an inspection and quote for my signboard in Hyderabad.';
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultText)}`;
  }

  const lines: string[] = ['*SignFix Diagnostic & Quote Request*', ''];

  if (payload.name) lines.push(`*Name:* ${payload.name.trim()}`);
  if (payload.phone) lines.push(`*Phone:* ${payload.phone.trim()}`);
  if (payload.location) lines.push(`*Location:* ${payload.location.trim()}`);
  if (payload.signType) lines.push(`*Sign Type:* ${payload.signType}`);
  if (payload.problem) lines.push(`*Issue / Fault:* ${payload.problem}`);
  if (payload.notes) lines.push(`*Notes:* ${payload.notes.trim()}`);

  lines.push('');
  lines.push('I have attached / will attach photos of the sign below.');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(lines.join('\n'))}`;
}
