const form = {
    build(form) {
        const payload = {};
        const inputs = form.querySelectorAll("input:not([type='checkbox']):not([name='filepond'])");
        const filepondDiv = form.querySelectorAll(".pond");
        const checks = form.querySelectorAll("[type='checkbox']");

        filepondDiv.forEach(div => {
            const divPonds = div.querySelectorAll("[name='filepond']");
            const group = [];
            const name = div.getAttribute("name") || 'filepond';

            divPonds.forEach(pond => {
                if (pond.value) {
                    const base64 = JSON.parse(pond.value);
                    group.push(base64.data);
                }
            });

            if (group.length) {
                payload[name] = group;
            }
        });


        inputs.forEach(input => {
            if (input.name) {
                payload[input.name] = input.value;
            }
        });

        checks.forEach(check => {
            if (check.name) {
                payload[check.name] = check.checked;
            }
        })

        return payload;
    },

    buildCheck(form) {
        const checks = form.querySelectorAll("[type='checkbox']");
        const payload = [];

        checks.forEach(check => {
            if (check.checked) {
                payload.push(check.value)
            }
        })

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