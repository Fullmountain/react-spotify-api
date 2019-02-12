import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/playlists';

const Playlist = props => {
    let url = BASE_URL + `/${props.id}`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Playlist.Tracks = props => {
    let url = BASE_URL + `/${props.id}/tracks`;
    let options = { ...props.options };

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Playlist.Images = props => {
    let url = BASE_URL + `/${props.id}/images`;
    // no options for this endpoint

    return (
        <ApiRequest url={url}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Playlist.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.object
};

Playlist.Tracks.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.object
};

Playlist.Images.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Playlist;
