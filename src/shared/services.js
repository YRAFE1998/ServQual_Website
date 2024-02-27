import axios from 'axios';
export class DrupalClientAdapter {
    static DRUPAL_BASE_URL = 'https://servqual.org/admin/cms/'
    getServiceBlocks() {
        return this.getDrupalJsonBasicBlock('serviceblocks')
    }
    
    getAboutUsBlock(){
        return this.getDrupalJsonBasicBlock('about-us');
    }

    getClientsBlock(){
        return this.getDrupalJsonBasicBlock('clients');
    }

    getTitleBlock(page){
        return this.getDrupalJsonBasicBlock(page + '-header');
    }
    
    getFooterBlock(){
        return this.getDrupalJsonBasicBlock('footer');
    }

    getDrupalJsonBasicBlock(url) {
        return axios.get(DrupalClientAdapter.DRUPAL_BASE_URL + url, {
            params: {
                "_format": "json"
            }
        })
    }

}