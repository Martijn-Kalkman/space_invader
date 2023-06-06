import { ImageSource, Loader } from 'excalibur';
import playerimg from '../images/spacee.png';
import enemyimg from '../images/alien.png';

const Resources = {
  player: new ImageSource(playerimg),
  enemy: new ImageSource(enemyimg),
};

const ResourceLoader = new Loader([Resources.player, Resources.enemy]);

export { Resources, ResourceLoader };
