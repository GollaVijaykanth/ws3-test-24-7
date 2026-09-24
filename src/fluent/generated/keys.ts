import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '387839056fd74078b2fb9e62643241ad'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9b7f2b349ff34666b3276c891bdc0df1'
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role'
                        id: '2cc03055f4af0710f8778ba15279c240'
                        key: {
                            name: 'x_snc_ws3test24_0.user'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '60c03055f4af0710f8778ba15279c211'
                        key: {
                            name: 'x_snc_ws3test24_0.admin'
                        }
                    },
                ]
            }
        }
    }
}
