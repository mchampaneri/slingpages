<template>
<div class="column is-3">
                <div class="card">
                    <div class="card-footer">
                        <div style="padding: 5px 25px; width: 100%;">
                            <span class="icon has-background-warning">
                                <i class="fa fa-1x fas fa-link  has-text-link "></i>
                            </span>
                            <span class="icon has-background-warning">
                                <i class="fa fa-1x fas fa-eye  has-text-link "></i>
                            </span>
                            <span class="icon is-pulled-right ">
                                    <i class="fa fa-1x fas fa-trash  has-text-danger"
                                    @click="deleteFileAsset"></i>
                            </span>
                            <div style="clear:both"></div>
                        </div>
                    </div>
                    <div class="card-content">
                        <span class="icon">
                            <i class="fa fa-file" style="word-break:break-all"></i>
                        </span>{{name}}
                    </div>
                </div>

            </div>
</template>


<script>
export default {
    props:['viewUrl', 'deleteUrl','name'],

    methods:{
        deleteFileAsset(){
            let vm = this;
            axios.post(vm.deleteUrl)
                .then(function (response) {
                   window.location.reload();
                })
                .catch(function (error) {
                  console.log(error);
                });
        }
    }
}
</script>
