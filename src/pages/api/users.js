export default function handler(req, res) {
    if (req.method === 'POST') {
        return { Mesag: 'asdfasd' }
    } else {
        return { message: 'METHOD_NOT_ALLOW' }
    }
}