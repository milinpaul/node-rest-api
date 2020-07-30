import shortid from 'shortid'

export const generateBookingNo = () => {
  shortid.characters('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!')
  const bookingNo = shortid.generate().toUpperCase()
  return bookingNo
}

export const generateInvoiceNo = () => {
  shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!')
  const invoiceNo = shortid.generate().toUpperCase()
  return invoiceNo
}
