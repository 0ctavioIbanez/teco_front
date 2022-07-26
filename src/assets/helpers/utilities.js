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

        const multi = {
            name: '',
            checks: []
        };
        checks.forEach(check => {
            if (check.name) {
                if (check.hasAttribute("multi")) {
                    if (check.checked) {
                        multi.checks.push(check.value);
                    }
                    multi.name = check.name;
                } else {
                    payload[check.name] = check.checked;
                }
            }
        });

        if (multi.checks.length) {
            payload[multi.name] = multi.checks;
        }

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

const format = {
    number(amount) {
        if (isNaN(amount)) {
            return amount;
        }
        return new Intl.NumberFormat('es-MX', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount)
    }
};

export {
    form,
    deviceType,
    format
}