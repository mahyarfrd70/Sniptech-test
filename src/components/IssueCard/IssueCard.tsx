import {Card, CardActions, CardContent, Typography} from '@mui/material';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {IssueCardProps} from '.';

const IssueCardContainer = styled(Card)`
  margin-bottom: 16px;
`;

const IssueCard = ({title, body, detailLink}: IssueCardProps) => {
  return (
    <IssueCardContainer>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={detailLink}>More details</Link>
      </CardActions>
    </IssueCardContainer>
  );
};

export default IssueCard;
