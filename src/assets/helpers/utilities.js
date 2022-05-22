const form = {
    build(form) {
        const payload = {};
        const inputs = form.querySelectorAll("input:not([type='checkbox'])");

        inputs.forEach(input => {
            if (input.name) {
                payload[input.name] = input.value;
            }
        });

        return payload;
    }
}

const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

export {
    form,
    deviceType
}